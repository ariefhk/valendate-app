import { Button } from "@/components/_shadcn-ui/button"
import { useNavigate } from "react-router"

const Error400Page = () => {
  const navigate = useNavigate()
  return (
    <div className="h-svh font-inter">
      <div className="m-auto flex h-full w-full flex-col items-center justify-center gap-2">
        <h1 className="text-[7rem] font-bold leading-tight">400</h1>
        <span className="font-medium">Ups! Permintaan Tidak Valid!</span>
        <p className="text-center text-muted-foreground">
          Halaman yang kamu akses tidak dapat ditemukan <br />
          atau permintaan yang kamu kirimkan tidak valid.
        </p>
        <div className="mt-6 flex gap-4">
          <Button variant="outline" onClick={() => navigate(-1)}>
            Kembali
          </Button>
          <Button onClick={() => navigate("/")}>Kembali ke Beranda</Button>
        </div>
      </div>
    </div>
  )
}

export default Error400Page
