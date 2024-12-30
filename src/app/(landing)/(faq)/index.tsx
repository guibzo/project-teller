import { LandingSectionTitle } from '@/components/landing-section-title'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { faqList } from '@/constants/faq-list'

export const Faq = () => {
  return (
    <div className='flex flex-col items-center gap-10'>
      <LandingSectionTitle>Perguntas frequentes</LandingSectionTitle>

      <Accordion className='w-full max-w-[700px]' type='single' collapsible>
        {faqList.map((faq) => {
          return (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger className='text-lg font-semibold'>
                {faq.title}
              </AccordionTrigger>
              <AccordionContent className='text-base leading-7 text-muted-foreground'>
                {faq.description}
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>
    </div>
  )
}
