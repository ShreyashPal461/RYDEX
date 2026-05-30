const mongoose = require('mongoose');

const mongodbUrl = "mongodb+srv://shreyashpal461_db_user:vxvE8WdmrtXDfW50@cluster0.mwps91y.mongodb.net/?appName=Cluster0";

async function run() {
  console.log("Connecting to MongoDB...");
  await mongoose.connect(mongodbUrl);
  console.log("Connected successfully!");
  
  const collections = await mongoose.connection.db.listCollections().toArray();
  console.log("Collections in DB:", collections.map(c => c.name));
  
  const users = await mongoose.connection.db.collection('users').find().toArray();
  console.log(`Total users found: ${users.length}`);
  
  // Let's inspect the fields of the most recent user
  if (users.length > 0) {
    const latestUser = users[users.length - 1];
    console.log("Latest User:", JSON.stringify({
      _id: latestUser._id,
      name: latestUser.name,
      email: latestUser.email,
      role: latestUser.role,
      vendorStatus: latestUser.vendorStatus,
      vendorOnboardingStep: latestUser.vendorOnboardingStep,
      isVendorBlocked: latestUser.isVendorBlocked
    }, null, 2));
  }
  
  const vehicles = await mongoose.connection.db.collection('vehicles').find().toArray();
  console.log(`Total vehicles found: ${vehicles.length}`);
  if (vehicles.length > 0) {
    const latestVehicle = vehicles[vehicles.length - 1];
    console.log("Latest Vehicle:", JSON.stringify(latestVehicle, null, 2));
  }

  await mongoose.disconnect();
  console.log("Disconnected!");
}

run().catch(err => {
  console.error("Test DB Error:", err);
});
