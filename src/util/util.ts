interface CustomError {
  message?: string;
  detail?: string;
  [key: string]: string[] | string | undefined;
}

export const handleErrorMessage = (error: CustomError): string => {
  console.log(error)
  try {
    if (error?.message) {
      return error.message
    }
    if (error?.detail) {
      return error.detail
    }
    const errorKeys = Object.keys(error)
    for (const key of errorKeys) {
      if (error[key]?.[0] !== undefined) {
        return error[key]?.[0] ?? "Getting error"
      }
    }
    return "Getting error"
  } catch (err) {
    return "Getting error"
  }
}
