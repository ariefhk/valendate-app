import { Input } from "@/components/_shadcn-ui/input"
import RenderList from "@/components/atoms/render-list"
import { useEffect, useState } from "react"

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

  useEffect(() => {
    if (input === "123456") {
      handleNextSection?.()
    }
  }, [input, handleNextSection])

  const handleClick = (data: string) => {
    setInput((prev) => prev + data)
  }

  return (
    <>
      <div className="w-[40%]  h-full flex  justify-center">
        <img
          src="/assets/jpg/jihyo.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-[60%]  h-full flex p-16 py-12">
        <div className="h-full w-full flex flex-col gap-6">
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
    </>
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
      <span className="text-2xl font-bold"> {title}</span>
      <span className="text-sm"> {label}</span>
    </div>
  )
}

const SectionTwo = ({
  handleNextSection,
}: {
  handleNextSection?: () => void
}) => {
  const anniversaryDate = new Date(2023, 1, 14)

  const calculateTimeDiff = () => {
    const now = new Date()
    let diff = now.getTime() - anniversaryDate.getTime()

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25)) // Account for leap years
    diff -= years * 1000 * 60 * 60 * 24 * 365.25

    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44)) // Approximate month length
    diff -= months * 1000 * 60 * 60 * 24 * 30.44

    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    diff -= days * 1000 * 60 * 60 * 24

    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24
    const minutes = Math.floor((diff / (1000 * 60)) % 60)
    const seconds = Math.floor((diff / 1000) % 60)

    return { years, months, days, hours, minutes, seconds }
  }

  const [timeElapsed, setTimeElapsed] = useState(calculateTimeDiff())

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeElapsed(calculateTimeDiff())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full h-full flex items-center   font-inter flex-col ">
      <div className="flex items-center  h-max w-max px-20 pt-10 gap-10">
        <div className="relative rounded-full w-[80px] h-[80px] overflow-hidden  border-[4px] border-dashed border-[#FF1493]">
          <img
            src="/assets/jpg/jihyo.jpg"
            alt="Jihyo"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-2xl inter bg-[#FF1493] px-5 py-3 rounded-full text-white">
          How long have been together?
        </div>
      </div>

      <div className=" w-full flex-1 px-20 pt-6 flex flex-col items-center gap-4">
        <div className="font-bold text-2xl uppercase text-red-600">
          {timeElapsed.years} {timeElapsed.years === 1 ? "year" : "years"}{" "}
          {timeElapsed.months} {timeElapsed.months === 1 ? "month" : "months"}{" "}
        </div>

        <div className="flex gap-4 text-2xl  w-full justify-between">
          <DateDisplay title={timeElapsed.days} label={"Days"} />
          <DateDisplay title={timeElapsed.hours} label={"Hours"} />
          <DateDisplay title={timeElapsed.minutes} label={"Minutes"} />
          <DateDisplay title={timeElapsed.seconds} label={"Seconds"} />
        </div>
        <div>
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

const HelloPage = () => {
  const [showSection, setShowSection] = useState(3)

  return (
    <div className="h-screen w-screen inter overflow-hidden">
      <div className=" w-full h-full flex items-center justify-center">
        <div className="max-h-[400px] max-w-[800px] rounded-[20px]  bg-white border-4 border-[#FF1493] w-full h-full overflow-hidden flex">
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
            <div className="w-full h-full flex flex-col items-center pt-4 gap-y-4">
              <div className="text-xl inter bg-[#FF1493] px-5 py-2 rounded-full text-white">
                You & Me
              </div>
              <div className="grid grid-cols-3 grid-rows-2 gap-4 w-[80%] h-[300px] ">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="rounded-lg overflow-hidden ">
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
        </div>
      </div>
    </div>
  )
}

export default HelloPage
