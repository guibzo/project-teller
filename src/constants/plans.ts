import { v4 as uuidv4 } from 'uuid'

type Plan = {
  id: string
  name: string
  price: number
  pricePerPeriodLabel?: string
  isHighlighted?: boolean
}

export const plans: Plan[] = [
  {
    id: uuidv4(),
    name: 'Mensal',
    price: 9.9,
    pricePerPeriodLabel: '/mês',
  },
  {
    id: uuidv4(),
    name: 'Vitalício',
    price: 199.99,
    isHighlighted: true,
  },
  {
    id: uuidv4(),
    name: 'Anual',
    price: 99.9,
    pricePerPeriodLabel: '/ano',
  },
]
