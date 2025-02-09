import SectionContainer from "@/components/atoms/container/section-container"
import TitleContainer from "@/components/atoms/container/title-container"
import React from "react"
import { IoMdMail } from "react-icons/io"

interface SectionFourProps {
  handleNextSection?: () => void
}

const SectionFour: React.FC<SectionFourProps> = ({ handleNextSection }) => {
  return (
    <SectionContainer className="h-max max-h-[100vh] w-full overflow-y-auto md:overflow-hidden ">
      <div className="w-full h-full flex items-center   font-inter flex-col md:p-8 p-8 pt-16 gap-y-8">
        <div className="flex flex-col gap-5 items-center">
          <div className="flex items-center gap-3">
            <IoMdMail className="flex-shrink-0 text-pink-500 w-10 h-10" />
            <IoMdMail className="flex-shrink-0 text-pink-500 w-10 h-10" />
            <IoMdMail className="flex-shrink-0 text-pink-500 w-10 h-10" />
          </div>
          <TitleContainer className="font-semibold text-xl px-8">
            Dear, My love
          </TitleContainer>
        </div>
        <span className="text-justify  " onClick={handleNextSection}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
          minima consectetur molestiae laboriosam repellendus veritatis
          doloremque adipisci, libero iure consequuntur placeat ullam reiciendis
          sed exercitationem, eius sint? Inventore, excepturi nam! Ea ullam quae
          ipsa necessitatibus adipisci impedit consectetur, quas fuga
          voluptatibus, harum ipsum deserunt consequuntur quo, reprehenderit
          magnam repudiandae.
        </span>
        <div className="flex-1  h-full w-full flex justify-center items-end  ">
          <TitleContainer
            onClick={handleNextSection}
            className="text-md inter cursor-pointer px-5 py-3 h-max w-max rounded-full text-white">
            Back to Section One
          </TitleContainer>
        </div>
      </div>
    </SectionContainer>
  )
}

export default SectionFour
