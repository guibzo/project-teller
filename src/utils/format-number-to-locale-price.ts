export const formatNumberToLocalePrice = (number: number) => {
  const price = number.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return price
}
