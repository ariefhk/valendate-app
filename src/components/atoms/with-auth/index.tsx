import React, { ComponentType, useEffect } from "react"
import { useNavigate } from "react-router"

// Define a generic type for the HOC
const withAuth = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const AuthenticatedComponent: React.FC<P> = (props) => {
    const navigate = useNavigate()
    const isAuthenticated = !!localStorage.getItem("token") // Example: Replace with actual auth logic

    useEffect(() => {
      if (!isAuthenticated) {
        navigate("/login") // Redirect if not authenticated
      }
    }, [isAuthenticated, navigate])

    if (!isAuthenticated) {
      return null // This can be to show loader
    }

    return <WrappedComponent {...props} />
  }

  return AuthenticatedComponent
}

export default withAuth
