import SectionContainer from "@/components/atoms/container/section-container"
import TitleContainer from "@/components/atoms/container/title-container"
import DateDisplay from "@/components/atoms/data-display"
import React, { useEffect, useState } from "react"
import { calculateTimeDiff } from "./section-two.utils"

interface SectionTwoProps {
  handleNextSection?: () => void
}

const SectionTwo: React.FC<SectionTwoProps> = ({ handleNextSection }) => {
  const [timeElapsed, setTimeElapsed] = useState(calculateTimeDiff())

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeElapsed(calculateTimeDiff())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <SectionContainer className="h-max max-h-[100vh] w-full overflow-y-auto md:overflow-hidden ">
      <div className="w-full h-full flex items-center  flex-col gap-16 md:gap-8">
        <div className="flex items-center flex-col md:flex-row  h-max w-max px-20 pt-10 gap-8 md:gap-8">
          <div className="relative rounded-full w-[140px] h-[140px]  md:w-[80px] md:h-[80px] overflow-hidden  border-[4px] border-dashed border-[#FF1493]">
            <img
              src="/assets/jpg/jihyo.jpg"
              alt="Jihyo"
              className="w-full h-full object-cover"
            />
          </div>
          <TitleContainer className="text-[18px]  px-5 py-3 rounded-full text-white">
            How long have been together?
          </TitleContainer>
        </div>

        <div className=" w-full flex-1 px-6 sm:px-20 pt-6 flex flex-col items-center gap-10">
          <div className="font-bold md:text-3xl text-4xl uppercase text-red-600">
            {timeElapsed.totalYears}{" "}
            {timeElapsed.totalYears === 1 ? "year" : "years"}{" "}
            {timeElapsed.totalMonths}{" "}
            {timeElapsed.totalMonths === 1 ? "month" : "months"}{" "}
          </div>

          <div className="flex md:gap-4 gap-1  w-full justify-between items-start   flex-row">
            <DateDisplay title={timeElapsed.totalDays} label={"Days"} />
            <span className="text-4xl pt-2 md:pt-0  md:text-5xl text-[#FF1493]">
              :
            </span>
            <DateDisplay title={timeElapsed.nowHours} label={"Hours"} />
            <span className="text-4xl pt-2 md:pt-0  md:text-5xl text-[#FF1493]">
              :
            </span>
            <DateDisplay title={timeElapsed.nowMinutes} label={"Minutes"} />
            <span className="text-4xl pt-2 md:pt-0  md:text-5xl text-[#FF1493]">
              :
            </span>
            <DateDisplay title={timeElapsed.nowSeconds} label={"Seconds"} />
          </div>
          <div className=" flex-1 flex items-end pb-10">
            <TitleContainer
              onClick={() => {
                handleNextSection?.()
              }}
              className="bg-[#FF1493] text-white px-6 py-3 hover:bg-opacity-80 transition-all duration-200">
              Next Section
            </TitleContainer>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default SectionTwo
