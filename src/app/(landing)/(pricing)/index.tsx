import { LandingSectionTitle } from '@/components/landing-section-title'
import { plans } from '@/constants/plans'
import { TRIAL_DAYS } from '@/constants/trial-days'
import { HighlightedPricingCard } from './(components)/highlighted-pricing-card'
import { PricingCard } from './(components)/pricing-card'

export const Pricing = () => {
  return (
    // mb-[150px] mt-[70px]
    <section className='flex flex-col items-center gap-14'>
      <div className='items-center space-y-6'>
        <LandingSectionTitle>Um valor acessível para todos</LandingSectionTitle>
        <p className='text-center'>
          Junte-se á comunidade de criadores profissionais que já estão elevando
          sua <br /> presença online. Teste gratuitamente por{' '}
          <strong className='text-primary'>{TRIAL_DAYS} dias</strong>, sem
          compromisso!
        </p>
      </div>

      <div className='grid grid-cols-3 gap-9'>
        {plans.map((plan) => {
          return (
            <>
              {plan.isHighlighted ? (
                <HighlightedPricingCard key={plan.id} {...plan} />
              ) : (
                <PricingCard key={plan.id} {...plan} />
              )}
            </>
          )
        })}
      </div>
    </section>
  )
}
