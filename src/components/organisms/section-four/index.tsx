import TitleContainer from "@/components/atoms/container/title-container"
import React from "react"
import { IoMdMail } from "react-icons/io"

interface SectionFourProps {
  handleNextSection?: () => void
}

const SectionFour: React.FC<SectionFourProps> = ({ handleNextSection }) => {
  return (
    <div className="w-full h-full flex items-center   font-inter flex-col p-8 gap-y-6">
      <div className="flex flex-col gap-2 items-center">
        <div className="flex items-center gap-3">
          <IoMdMail className="flex-shrink-0 text-pink-500 w-8 h-8" />
          <IoMdMail className="flex-shrink-0 text-pink-500 w-8 h-8" />
          <IoMdMail className="flex-shrink-0 text-pink-500 w-8 h-8" />
        </div>
        <TitleContainer className="font-semibold">Dear, My love</TitleContainer>
      </div>
      <span className="text-justify" onClick={handleNextSection}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore minima
        consectetur molestiae laboriosam repellendus veritatis doloremque
        adipisci, libero iure consequuntur placeat ullam reiciendis sed
        exercitationem, eius sint? Inventore, excepturi nam! Ea ullam quae ipsa
        necessitatibus adipisci impedit consectetur, quas fuga voluptatibus,
        harum ipsum deserunt consequuntur quo, reprehenderit magnam repudiandae.
        Saepe at repudiandae blanditiis accusantium ex dicta dolores
        consequuntur fuga magnam! Consequuntur, corrupti sapiente? Voluptatum
        quaerat fuga, libero consequuntur suscipit quae numquam maxime enim non
        autem praesentium inventore repudiandae labore facere quam atque ducimus
        est at sequi alias minima provident esse?
      </span>
    </div>
  )
}

export default SectionFour
