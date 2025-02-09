export const anniversaryDate = new Date("2024-01-09T00:00:00") // Anniversary date at midnight

export const calculateTimeDiff = () => {
  const now = new Date()

  // Total difference in milliseconds
  const diffInMs = now.getTime() - anniversaryDate.getTime()

  // Convert to total units
  const totalSeconds = Math.floor(diffInMs / 1000)
  const totalMinutes = Math.floor(totalSeconds / 60)
  const totalHours = Math.floor(totalMinutes / 60)
  const totalDays = Math.floor(totalHours / 24)

  let years = now.getFullYear() - anniversaryDate.getFullYear()
  let months = now.getMonth() - anniversaryDate.getMonth()
  let days = now.getDate() - anniversaryDate.getDate()

  // Adjust months if negative
  if (months < 0) {
    years -= 1
    months += 12
  }

  // Adjust days if negative
  if (days < 0) {
    months -= 1
    const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0) // Last day of the previous month
    days += lastMonth.getDate()
  }

  // Total months (years converted to months + remaining months)
  const totalMonths = months

  return {
    totalYears: years,
    totalMonths,
    totalDays,
    totalHours,
    totalMinutes,
    totalSeconds,
    nowHours: now.getHours(),
    nowMinutes: now.getMinutes(),
    nowSeconds: now.getSeconds(),
  }
}
