/* eslint-disable @typescript-eslint/no-explicit-any */

import { ChangeEvent, useState } from "react"

type InputValues = Record<string, any>

interface UseInputReturn<T extends InputValues> {
  values: T
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  reset: () => void
  resetField: (fieldName: keyof T, value: T[keyof T]) => void
}

const useInput = <T extends InputValues>(
  initialState: T,
): UseInputReturn<T> => {
  const [values, setValues] = useState<T>(initialState)

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))
  }

  const reset = () => {
    setValues(initialState)
  }

  const resetField = (fieldName: keyof T, value: T[keyof T]) => {
    setValues((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
    }))
  }

  return {
    values,
    handleChange,
    reset,
    resetField,
  }
}

export default useInput
