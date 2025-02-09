import { cn } from "@/common/utils/cn"
import React from "react"

interface SectionContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        "md:max-h-[600px] max-h-[86vh]  h-full mx-2  md:mx-0 w-full md:max-w-[700px] rounded-[20px]  bg-white border-4 border-[#FF1493] overflow-hidden",
        className,
      )}
      {...props}>
      {children}
    </div>
  )
}

export default SectionContainer
