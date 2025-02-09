import React, { useState } from "react"

interface Ripple {
  id: number
  x: number
  y: number
}

interface RippleEffectButtonProps {
  number: string
  onClick?: () => void
}

const RippleEffectButton: React.FC<RippleEffectButtonProps> = ({
  number,
  onClick,
}) => {
  const [ripples, setRipples] = useState<Ripple[]>([])

  const addRipple = (e: React.MouseEvent<HTMLElement>) => {
    const x = e.clientX - (e.target as HTMLElement).offsetLeft
    const y = e.clientY - (e.target as HTMLElement).offsetTop
    const newRipple = { id: Date.now(), x, y }

    // The setState type
    setRipples((prev: Ripple[]) => [...prev, newRipple])

    setTimeout(() => {
      setRipples((prev: Ripple[]) => prev.filter((r) => r.id !== newRipple.id))
    }, 600)
  }

  return (
    <div className="relative overflow-hidden bg-[#FF1493] bg-opacity-80 hover:bg-opacity-100 active:bg-opacity-60 transition-all duration-200  rounded-lg flex items-center justify-center shadow-md hover:shadow-lg cursor-pointer active:scale-95">
      <button
        onClick={(e) => {
          addRipple(e)
          onClick?.()
        }}
        className="relative py-2 px-6 text-2xl text-white font-semibold overflow-hidden w-full h-full flex items-center justify-center">
        {number}
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="absolute w-20 h-20  bg-white bg-opacity-50 rounded-full  animate-ripple"
            style={{
              top: ripple.y - 40 + "px",
              left: ripple.x - 40 + "px",
            }}></span>
        ))}
      </button>
    </div>
  )
}

export default RippleEffectButton
