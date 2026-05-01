import Journey from '@/components/about/Journey'
import Values from '@/components/about/Values'
import Achievements from '@/components/about/Achievements'
import Steps from '@/components/about/Steps'
import Team from '@/components/about/Team'
import Clients from '@/components/about/Clients'
import CTA from '@/components/home/CTA'

export default function AboutPage() {
  return (
    <div>
      <Journey />
      <Values />
      <Achievements />
      <Steps />
      <Team />
      <Clients />
      <CTA />
    </div>
  )
}