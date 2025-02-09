import { cn } from "@/common/utils/cn"
import { Input } from "@/components/_shadcn-ui/input"
import RenderList from "@/components/atoms/render-list"
import RippleEffectButton from "@/components/atoms/ripple-effect-button"
import React, { useEffect, useState } from "react"
import {
  keypadCombination,
  keypadNumber,
  sectionOneImages,
} from "./section-one.constants"

interface SectionOneProps {
  handleNextSection?: () => void
}

const SectionOne: React.FC<SectionOneProps> = ({ handleNextSection }) => {
  const [input, setInput] = useState("")
  const [effect, setEffect] = useState(false)

  useEffect(() => {
    if (input === keypadCombination) {
      handleNextSection?.()
    }
  }, [input, handleNextSection])

  const handleClick = (data: string) => {
    setEffect(true)

    setInput((prev) => prev + data)
    // Remove effect after animation completes
    setTimeout(() => {
      setEffect(false)
    }, 500) // Match CSS animation duration
  }

  return (
    <div className="flex flex-col md:flex-row w-full h-full items-center md:items-start">
      <div className="md:w-[40%] mt-10 md:mt-0 flex  justify-center items-start md:pt-[140px]">
        <div className="max-w-[200px] max-h-[200px] ">
          <img
            src={sectionOneImages}
            alt=""
            className={cn(
              "w-full h-full object-cover overflow-hidden rounded-[16px] ",
              {
                "animate-pulse": effect,
              },
            )}
          />
        </div>
      </div>
      <div className="md:w-[60%] h-full flex pt-20 md:pt-0 md:justify-center md:items-center">
        <div className="h-full w-full md:max-w-[80%] max-w-full md:h-max flex flex-col gap-6">
          <Input
            className="border-[#FF1493] border-2 ring-[#FF1493] ring-2 focus-visible:ring-[#FF1493] focus:border-[#FF1493] focus:outline-none rounded-lg p-4 text-[#FF1493] font-semibold md:text-2xl"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="grid gap-4 grid-cols-3 ">
            <RenderList
              of={keypadNumber}
              render={(data) => {
                return (
                  <RippleEffectButton
                    onClick={() => {
                      handleClick(data.number)
                    }}
                    number={data.number}
                  />
                )
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionOne
