import { cn } from "@/common/utils/cn"
import React from "react"

interface TitleContainerProps {
  className?: string
  children: React.ReactNode
}

const TitleContainer: React.FC<TitleContainerProps> = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "bg-[#FF1493] text-white rounded-full px-5 py-2",
        className,
      )}>
      {children}
    </div>
  )
}

export default TitleContainer
