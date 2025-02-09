import { cn } from "@/common/utils/cn"
import { Input } from "@/components/_shadcn-ui/input"
import SectionContainer from "@/components/atoms/container/section-container"
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

    const timeId = setTimeout(() => {
      setEffect(false)
    }, 500)

    return () => clearTimeout(timeId)
  }

  return (
    <SectionContainer className="md:h-[400px] h-max max-h-[100vh] w-full overflow-y-auto md:overflow-hidden ">
      <div className="flex flex-col md:flex-row w-full  h-full gap-y-16 items-center md:items-start">
        <div className="md:w-[40%] mt-6 md:mt-16 flex justify-center items-start md:h-full">
          <div className="max-w-[180px] max-h-[180px]">
            <img
              src={sectionOneImages}
              alt=""
              className={cn(
                "w-full h-full object-cover overflow-hidden rounded-[16px]",
                {
                  "animate-pulse": effect,
                },
              )}
            />
          </div>
        </div>
        <div className="md:w-[60%] flex md:pt-0 md:justify-center md:items-center h-full">
          <div className="h-full w-full md:max-w-[80%] max-w-full md:h-max flex flex-col gap-6">
            <Input
              className="border-[#FF1493] border-2 ring-[#FF1493] ring-2 focus-visible:ring-[#FF1493] focus:border-[#FF1493] focus:outline-none rounded-lg p-4 text-[#FF1493] font-semibold text-lg md:text-2xl"
              value={input}
              type="number"
              onChange={(e) => setInput(e.target.value)}
            />
            {/* Make the keypad scrollable on small screens */}
            <div className="w-full pb-4 md:pb-0 max-w-full">
              <div className="grid gap-4 grid-cols-3  w-full">
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
      </div>
    </SectionContainer>
  )
}

export default SectionOne
