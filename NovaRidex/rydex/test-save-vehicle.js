const mongoose = require('mongoose');

const mongodbUrl = "mongodb+srv://shreyashpal461_db_user:vxvE8WdmrtXDfW50@cluster0.mwps91y.mongodb.net/?appName=Cluster0";

// Define Schemas inline to mimic the models
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, default: "user" },
  vendorStatus: String,
  vendorOnboardingStep: { type: Number, default: 0 },
  isVendorBlocked: { type: Boolean, default: false },
  location: {
    type: { type: String, enum: ["Point"] },
    coordinates: [Number]
  }
}, { timestamps: true });

UserSchema.index({ location: "2dsphere" });

const VehicleSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  type: { type: String, required: true, enum: ["bike", "auto", "car", "loading", "truck"] },
  number: { type: String, required: true, unique: true, uppercase: true },
  vehicleModel: { type: String, required: true },
  status: { type: String, default: "pending" },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model("User", UserSchema);
const Vehicle = mongoose.models.Vehicle || mongoose.model("Vehicle", VehicleSchema);

async function run() {
  console.log("Connecting to MongoDB...");
  await mongoose.connect(mongodbUrl);
  console.log("Connected!");

  const email = "riteshkumarpaswan538@gmail.com";
  console.log(`Finding user with email: ${email}...`);
  const user = await User.findOne({ email });
  if (!user) {
    console.log("User not found!");
    await mongoose.disconnect();
    return;
  }
  console.log("User found:", user._id);

  // Clean up any existing vehicle for this user first so we are in "Create Mode"
  console.log("Deleting any existing vehicle for this user to simulate fresh onboard...");
  await Vehicle.deleteMany({ owner: user._id });

  // Clean up any other vehicle with the test number to prevent duplicate number error
  const testNumber = "UP32AB1234";
  await Vehicle.deleteMany({ number: testNumber });

  console.log("Creating vehicle...");
  try {
    const vehicle = await Vehicle.create({
      owner: user._id,
      type: "bike",
      number: testNumber,
      vehicleModel: "Splendor Plus",
      status: "pending",
      isActive: true
    });
    console.log("Vehicle created successfully:", vehicle._id);

    console.log("Updating user details...");
    user.role = "vendor";
    user.vendorStatus = "pending";
    if (user.vendorOnboardingStep < 1) {
      user.vendorOnboardingStep = 1;
    }

    console.log("Saving user document...");
    await user.save();
    console.log("User saved successfully!");

  } catch (err) {
    console.error("CRITICAL EXCEPTION CAUGHT during simulation:");
    console.error(err);
  }

  // Clean up changes so we don't pollute database
  console.log("Cleaning up simulated vehicle...");
  await Vehicle.deleteMany({ owner: user._id });
  
  // Revert user to original role
  console.log("Reverting user back to user role...");
  user.role = "user";
  user.vendorStatus = undefined;
  user.vendorOnboardingStep = 0;
  await user.save();

  await mongoose.disconnect();
  console.log("Disconnected!");
}

run().catch(err => {
  console.error("Outer Error:", err);
});
