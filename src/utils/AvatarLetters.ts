export function getInitials(name: string): string {
  const words: string[] = name.split(" ")

  let initials: string = ""

  words.forEach((word) => {
    initials += word.charAt(0)
  })

  return initials
}
