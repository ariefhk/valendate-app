import { Button } from "@/components/_shadcn-ui/button"
import { Input } from "@/components/_shadcn-ui/input"
import { useQueryState } from "nuqs"
import { useParams } from "react-router"

const TestPage = () => {
  const { id } = useParams()
  const [name, setName] = useQueryState("name", {
    defaultValue: "",
  })

  return (
    <div>
      <p> TestPage {id}</p>
      <div>
        <Input value={name || ""} onChange={(e) => setName(e.target.value)} />
        <Button onClick={() => setName(null)}>Clear</Button>
        <p>Hello, {name || "anonymous visitor"}!</p>
      </div>
    </div>
  )
}

export default TestPage
