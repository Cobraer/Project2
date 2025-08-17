'use client'
import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) alert(error.message)
    else alert("Logged in!")
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <input className="border p-2 m-2" placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input className="border p-2 m-2" placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2">Login</button>
    </div>
  )
}
