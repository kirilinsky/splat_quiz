export function navigate(items, cardNumber) {
  const startIndex = cardNumber - 1
  return [...items].splice(startIndex, 1)
}
