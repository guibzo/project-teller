import { type LucideIcon } from 'lucide-react'
import { v4 as uuidv4 } from 'uuid'

type SocialLogo = {
  name: string
  src: string | LucideIcon
  id: string
}

export const socialLogos: SocialLogo[] = [
  {
    name: 'LinkedIn',
    src: '/logos/linkedin.svg',
    id: uuidv4(),
  },
  {
    name: 'GitHub',
    src: '/logos/github.svg',
    id: uuidv4(),
  },
  {
    name: 'Instagram',
    src: '/logos/instagram.svg',
    id: uuidv4(),
  },
  {
    name: 'x',
    src: '/logos/x.png',
    id: uuidv4(),
  },
  {
    name: 'Facebook',
    src: '/logos/facebook.svg',
    id: uuidv4(),
  },
]
