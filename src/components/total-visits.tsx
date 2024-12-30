import { LucideTrendingUp } from 'lucide-react'

export const TotalVisits = () => {
  return (
    <div className='flex items-center gap-4 rounded-md border bg-card p-4'>
      <label className='text-lg'>Total de visitas</label>
      <strong className='inline-flex items-center gap-1.5 text-2xl font-semibold text-lime-500'>
        12,453
        <LucideTrendingUp className='size-5 text-lime-500' />
      </strong>
    </div>
  )
}
