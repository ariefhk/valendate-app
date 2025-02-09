import SectionContainer from "@/components/atoms/container/section-container"
import TitleContainer from "@/components/atoms/container/title-container"
import RenderList from "@/components/atoms/render-list"
import React from "react"
import { imageData } from "./section-three.constants"

interface SectionThreeProps {
  handleNextSection?: () => void
}

const SectionThree: React.FC<SectionThreeProps> = ({ handleNextSection }) => {
  return (
    <SectionContainer>
      <div className="w-full h-full flex flex-col items-center gap-y-6">
        <TitleContainer className="mt-8 text-xl px-10 py-3">
          You & Me
        </TitleContainer>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-h-[65%] overflow-y-auto mx-3">
          <RenderList
            of={imageData}
            render={(data, idx) => {
              return (
                <div
                  key={idx + 1}
                  className="rounded-lg overflow-hidden min-h-[200px] md:min-h-full">
                  <img
                    src={data.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              )
            }}
          />
        </div>
        <div className=" flex-1 w-full flex justify-center">
          <TitleContainer
            onClick={handleNextSection}
            className="text-md inter px-5 py-3 h-max w-max rounded-full text-white  hover:bg-opacity-80 transition-all duration-200 bg-[#FF1493]">
            Next Section
          </TitleContainer>
        </div>
      </div>
    </SectionContainer>
  )
}

export default SectionThree
