import { v4 as uuidv4 } from 'uuid'
import { TRIAL_DAYS } from './trial-days'

type FaqItem = {
  id: string
  title: string
  description: string
}

export const faqList: FaqItem[] = [
  {
    id: uuidv4(),
    title: 'Como funciona a criação de portfólio e links com o Project Teller?',
    description:
      'Com Project Teller, você pode criar um portfólio profissional e uma página de links em poucos minutos. Nossa plataforma oferece templates personalizáveis e uma interface fácil de usar para que você possa mostrar seu trabalho e organizar seus links de maneira eficiente.',
  },
  {
    id: uuidv4(),
    title: 'Há um período de teste gratuito?',
    description: `Sim! Oferecemos um teste gratuito de ${TRIAL_DAYS} dias, sem compromisso. Isso permite que você explore todas as funcionalidades da nossa plataforma antes de decidir por uma assinatura.`,
  },
  {
    id: uuidv4(),
    title: 'Posso personalizar o design do meu portfólio?',
    description:
      'Sim! Com Project Teller, você pode personalizar cores, fontes e layout do seu portfólio, garantindo que ele reflita a sua marca pessoal.',
  },
  {
    id: uuidv4(),
    title: 'Preciso de habilidades técnicas para usar a plataforma?',
    description:
      'Não! Nossa plataforma foi desenvolvida para ser simples e intuítiva, então não é necessário conhecimento técnico. Você pode criar e personalizar seu portfólio e links sem complicações.',
  },
  {
    id: uuidv4(),
    title: 'O que acontece se eu cancelar minha assinatura?',
    description:
      'Você pode cancelar sua assinatura a qualquer momento. Seu portfólio e página de links ficarão disponíveis até o final do periodo pago, mas após isso, as funcionalidades premium serão desativadas.',
  },
  {
    id: uuidv4(),
    title: 'Posso compartilhar meu portfólio em redes sociais?',
    description:
      'Sim! Você pode facilmente compartilhar seu portfólio e página de links em suas redes sociais através de um link personalizado.',
  },
]
