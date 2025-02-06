import { LINK_SOSMED } from "@/common/constants/link-sosmed"
import { Button } from "@/components/_shadcn-ui/button"
import { Github, Instagram, Linkedin, Twitter } from "lucide-react"
import { Link } from "react-router"

const HelloPage = () => {
  return (
    <div className="h-screen w-screen inter">
      <div className="m-auto flex h-full w-full flex-col items-center justify-center gap-2">
        <h1 className="text-[7rem] font-bold leading-tight">Hello World!</h1>
        <span className="font-medium">Thanks For Using This Template!</span>
        <p className="text-center text-muted-foreground">
          If you have something to ask, please don{"'"}t hesitate to contact me
          at
        </p>
        <div className="mt-6 flex gap-4">
          <Button asChild>
            <Link
              to={LINK_SOSMED.GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-2">
              <Github className="flex-shrink-0 w-5 h-5" /> My Github
            </Link>
          </Button>
          <Button asChild>
            <Link
              to={LINK_SOSMED.LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-2">
              <Linkedin className="flex-shrink-0 w-5 h-5" /> Linkedin
            </Link>
          </Button>
          <Button asChild>
            <Link
              to={LINK_SOSMED.INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-2">
              <Instagram className="flex-shrink-0 w-5 h-5" /> Instagram
            </Link>
          </Button>
          <Button asChild>
            <Link
              to={LINK_SOSMED.TWITTER}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-2">
              <Twitter className="flex-shrink-0 w-5 h-5" /> Twitter
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HelloPage
