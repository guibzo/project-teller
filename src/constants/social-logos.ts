import {
  LucideFacebook,
  LucideGithub,
  LucideInstagram,
  LucideLinkedin,
  LucideTwitter,
  type LucideIcon,
} from 'lucide-react'
import { v4 as uuidv4 } from 'uuid'

type SocialLogo = {
  name: string
  src: LucideIcon
  id: string
}

export const socialLogos: SocialLogo[] = [
  {
    name: 'LinkedIn',
    src: LucideLinkedin,
    id: uuidv4(),
  },
  {
    name: 'GitHub',
    src: LucideGithub,
    id: uuidv4(),
  },
  {
    name: 'Instagram',
    src: LucideInstagram,
    id: uuidv4(),
  },
  {
    name: 'x',
    src: LucideTwitter,
    id: uuidv4(),
  },
  {
    name: 'Facebook',
    src: LucideFacebook,
    id: uuidv4(),
  },
]
