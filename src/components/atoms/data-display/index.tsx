import React from "react"

interface DateDisplayProps {
  title: string | number
  label: string
}

const DateDisplay: React.FC<DateDisplayProps> = ({ title, label }) => {
  return (
    <div className="flex flex-col items-center gap-1 text-[#FF1493]">
      <span className="text-4xl sm:text-6xl font-bold"> {title}</span>
      <span className="text-sm"> {label}</span>
    </div>
  )
}

export default DateDisplay
