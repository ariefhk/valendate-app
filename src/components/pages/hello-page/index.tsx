import SectionFour from "@/components/organisms/section-four"
import SectionOne from "@/components/organisms/section-one"
import SectionThree from "@/components/organisms/section-three"
import SectionTwo from "@/components/organisms/section-two"
import { useState } from "react"

const HelloPage = () => {
  const [showSection, setShowSection] = useState(1)

  return (
    <div className="h-screen w-screen inter overflow-hidden">
      <div className=" w-full h-full flex items-center justify-center">
        <div className="md:max-h-[600px] max-h-[86vh]  h-full mx-2  md:mx-0 w-full md:max-w-[700px] rounded-[20px]  bg-white border-4 border-[#FF1493]   overflow-hidden ">
          {showSection === 1 && (
            <SectionOne
              handleNextSection={() => {
                setShowSection(2)
              }}
            />
          )}

          {showSection === 2 && (
            <SectionTwo
              handleNextSection={() => {
                setShowSection(3)
              }}
            />
          )}

          {showSection === 3 && (
            <SectionThree
              handleNextSection={() => {
                setShowSection(4)
              }}
            />
          )}

          {showSection === 4 && (
            <SectionFour
              handleNextSection={() => {
                setShowSection(1)
              }}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default HelloPage
