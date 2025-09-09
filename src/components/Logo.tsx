import Image from "next/image"
import React from "react"

export const Logo: React.FC = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Image
        src="/logo.png" // 👈 replace with your logo file in /public
        alt="App Logo"
        style={{ width: "120px", height: "auto" }}
      />
    </div>
  )
}
