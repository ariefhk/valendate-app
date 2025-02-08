import HeartRain from "@/components/atoms/heart-rain"
import { Outlet } from "react-router"

const LoveLayout = () => {
  return (
    <>
      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden"
        style={{ zIndex: -1 }}>
        <HeartRain />
      </div>
      <Outlet />
    </>
  )
}

export default LoveLayout
