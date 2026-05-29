'use client'

import { useSession } from 'next-auth/react'
import useGetMe from './hooks/useGetMe'
import { useEffect } from 'react'
import { getSocket } from './lib/socket'

function InitUser() {
  const { data: session, status } = useSession()

  // ✅ hook always called
  useGetMe(status === 'authenticated')

  useEffect(() => {
    if (status !== 'authenticated' || !session?.user?.id) return

    const userId = session.user.id
    const socket = getSocket()

    // Emit identity immediately when authenticated
    socket.emit("identity", userId)

    // Handle reconnect so the socket server gets the new socket ID
    const handleConnect = () => {
      socket.emit("identity", userId)
    }

    socket.on("connect", handleConnect)

    return () => {
      socket.off("connect", handleConnect)
    }
  }, [session?.user?.id, status])

  return null
}

export default InitUser