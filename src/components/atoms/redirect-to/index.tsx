import React from "react"
import { Navigate } from "react-router"

interface IRedirecToProps {
  to: string
  isReplace?: boolean
}

const RedirecTo: React.FC<IRedirecToProps> = ({ to, isReplace = false }) => {
  return <Navigate to={to} replace={isReplace} />
}

export default RedirecTo
