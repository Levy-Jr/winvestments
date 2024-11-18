const CURRENCY_FORMATTER = new Intl.NumberFormat("pt-BR", {
  currency: "BRL",
  style: "currency",
  minimumFractionDigits: 2
})

export const formatCurrency = (amount: number) => {
  return CURRENCY_FORMATTER.format(amount)
}

const NUMBER_FORMATTER = new Intl.NumberFormat("pt-BR")

export const formatNumber = (number: number) => {
  return NUMBER_FORMATTER.format(number)
}