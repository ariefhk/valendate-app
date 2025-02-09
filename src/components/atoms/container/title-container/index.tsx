import { cn } from "@/common/utils/cn"
import React from "react"

interface TitleContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
}

const TitleContainer: React.FC<TitleContainerProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        "bg-[#FF1493] text-white rounded-full px-5 py-2",
        className,
      )}
      {...props}>
      {children}
    </div>
  )
}

export default TitleContainer
