import axios from "axios"
import { toast } from "../hooks/use-toast"
import { clearLocalStorage } from "../utils/local-storage"

const axiosInstance = axios.create({
  baseURL: import.meta.env.BASE_URL || "",
})

// invalidate  global response while 401
axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response.status === 401) {
      toast({
        variant: "destructive",
        title: "Sesi Anda telah berakhir!",
        description: "Anda wajib login kembali!",
      })

      clearLocalStorage()
      window.location.href = "/login"

      return
    }
    return Promise.reject(new Error(error.message))
  },
)

export { axiosInstance }
