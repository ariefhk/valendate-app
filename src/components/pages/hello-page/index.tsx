import { cn } from "@/common/utils/cn"
import { Input } from "@/components/_shadcn-ui/input"
import TitleContainer from "@/components/atoms/container/title-container"
import RenderList from "@/components/atoms/render-list"
import { useEffect, useState } from "react"
import { IoMdMail } from "react-icons/io"

interface Ripple {
  id: number
  x: number
  y: number
}

const RippleEffectButton = ({
  number,
  onClick,
}: {
  number: string
  onClick?: () => void
}) => {
  const [ripples, setRipples] = useState<Ripple[]>([])

  const addRipple = (e: React.MouseEvent<HTMLElement>) => {
    const x = e.clientX - (e.target as HTMLElement).offsetLeft
    const y = e.clientY - (e.target as HTMLElement).offsetTop
    const newRipple = { id: Date.now(), x, y }

    // The setState type
    setRipples((prev: Ripple[]) => [...prev, newRipple])

    setTimeout(() => {
      setRipples((prev: Ripple[]) => prev.filter((r) => r.id !== newRipple.id))
    }, 600)
  }

  return (
    <div className="relative overflow-hidden bg-[#FF1493] bg-opacity-80 hover:bg-opacity-100 active:bg-opacity-60 transition-all duration-200  rounded-lg flex items-center justify-center shadow-md hover:shadow-lg cursor-pointer active:scale-95">
      <button
        onClick={(e) => {
          addRipple(e)
          onClick?.()
        }}
        className="relative py-2 px-6 text-2xl text-white font-semibold overflow-hidden w-full h-full flex items-center justify-center">
        {number}
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="absolute w-20 h-20  bg-white bg-opacity-50 rounded-full  animate-ripple"
            style={{
              top: ripple.y - 40 + "px",
              left: ripple.x - 40 + "px",
            }}></span>
        ))}
      </button>
    </div>
  )
}

const data = [
  {
    number: "1",
    value: "one",
  },
  {
    number: "2",
    value: "two",
  },
  {
    number: "3",
    value: "three",
  },
  {
    number: "4",
    value: "four",
  },
  {
    number: "5",
    value: "five",
  },
  {
    number: "6",
    value: "six",
  },
  {
    number: "7",
    value: "seven",
  },
  {
    number: "8",
    value: "eight",
  },
  {
    number: "9",
    value: "nine",
  },
  {
    number: "*",
    value: "star",
  },
  {
    number: "0",
    value: "zero",
  },
  {
    number: "#",
    value: "hash",
  },
]

const SectionOne = ({
  handleNextSection,
}: {
  handleNextSection?: () => void
}) => {
  const [input, setInput] = useState("")
  const [effect, setEffect] = useState(false)

  useEffect(() => {
    if (input === "123456") {
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
      <div className="md:w-[40%]  mt-10 md:mt-0 flex  justify-center items-start md:pt-[100px]">
        <div className="max-w-[200px] max-h-[200px] ">
          <img
            src="/assets/jpg/jihyo.jpg"
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
              of={data}
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

const DateDisplay = ({
  title,
  label,
}: {
  title: string | number
  label: string
}) => {
  return (
    <div className="flex flex-col items-center gap-1 text-[#FF1493]">
      <span className="text-4xl sm:text-6xl font-bold"> {title}</span>
      <span className="text-sm"> {label}</span>
    </div>
  )
}

const SectionTwo = ({
  handleNextSection,
}: {
  handleNextSection?: () => void
}) => {
  const anniversaryDate = new Date("2024-01-09T00:00:00") // Anniversary date at midnight

  const calculateTimeDiff = () => {
    const now = new Date()

    // Total difference in milliseconds
    const diffInMs = now.getTime() - anniversaryDate.getTime()

    // Convert to total units
    const totalSeconds = Math.floor(diffInMs / 1000)
    const totalMinutes = Math.floor(totalSeconds / 60)
    const totalHours = Math.floor(totalMinutes / 60)
    const totalDays = Math.floor(totalHours / 24)

    let years = now.getFullYear() - anniversaryDate.getFullYear()
    let months = now.getMonth() - anniversaryDate.getMonth()
    let days = now.getDate() - anniversaryDate.getDate()

    // Adjust months if negative
    if (months < 0) {
      years -= 1
      months += 12
    }

    // Adjust days if negative
    if (days < 0) {
      months -= 1
      const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0) // Last day of the previous month
      days += lastMonth.getDate()
    }

    // Total months (years converted to months + remaining months)
    const totalMonths = months

    return {
      totalYears: years,
      totalMonths,
      totalDays,
      totalHours,
      totalMinutes,
      totalSeconds,
      nowHours: now.getHours(),
      nowMinutes: now.getMinutes(),
      nowSeconds: now.getSeconds(),
    }
  }

  const [timeElapsed, setTimeElapsed] = useState(calculateTimeDiff())

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeElapsed(calculateTimeDiff())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full h-full flex items-center  flex-col gap-16 md:gap-8">
      <div className="flex items-center flex-col md:flex-row  h-max w-max px-20 pt-10 gap-8 md:gap-8">
        <div className="relative rounded-full w-[140px] h-[140px]  md:w-[80px] md:h-[80px] overflow-hidden  border-[4px] border-dashed border-[#FF1493]">
          <img
            src="/assets/jpg/jihyo.jpg"
            alt="Jihyo"
            className="w-full h-full object-cover"
          />
        </div>
        <TitleContainer className="text-xl inter px-5 py-3 rounded-full text-white">
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
          <button
            onClick={() => {
              handleNextSection?.()
            }}
            className="bg-[#FF1493] text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-80 transition-all duration-200">
            You & Me
          </button>
        </div>
      </div>
    </div>
  )
}

const SectionFour = ({
  handleNextSection,
}: {
  handleNextSection?: () => void
}) => {
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

const HelloPage = () => {
  const [showSection, setShowSection] = useState(1)

  return (
    <div className="h-screen w-screen inter overflow-hidden">
      <div className=" w-full h-full flex items-center justify-center">
        <div className="md:max-h-[700px] max-h-[86vh]  h-full mx-2  md:mx-0 w-full md:max-w-[700px] rounded-[20px]  bg-white border-4 border-[#FF1493]   overflow-hidden ">
          {showSection === 3 && (
            <div className="w-full h-full flex flex-col items-center gap-y-8">
              <TitleContainer className="mt-8 text-xl px-10 py-3">
                You & Me
              </TitleContainer>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-h-[76%] overflow-y-auto mx-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="rounded-lg overflow-hidden min-h-[200px] md:min-h-full">
                    <img
                      src="/assets/jpg/jihyo.jpg"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

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

          {showSection === 4 && (
            <SectionFour
              handleNextSection={() => {
                setShowSection(3)
              }}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default HelloPage
