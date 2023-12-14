export const convertInt = (value: string, fallback: number) => {
  try {
    const int = parseInt(value)
    return isNaN(int) ? fallback : int
  } catch {
    return fallback
  }
}
