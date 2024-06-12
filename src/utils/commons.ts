export function formatDate(date: string, includeTime: boolean = false): string {
  const parsedDate = new Date(date)

  const day = String(parsedDate.getDate()).padStart(2, '0')
  const month = String(parsedDate.getMonth() + 1).padStart(2, '0')
  const year = parsedDate.getFullYear()

  let formattedDate = `${day}.${month}.${year}`

  if (includeTime) {
    const hours = String(parsedDate.getHours()).padStart(2, '0')
    const minutes = String(parsedDate.getMinutes()).padStart(2, '0')

    formattedDate += `, ${hours}:${minutes}`
  }

  return formattedDate
}
