import { ReactNode } from 'react'

type Props = {
  title: string
  description: string
  children: ReactNode
}

export default function Section({ title, description, children }: Props) {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
      <div className="text-center md:text-left">
        <h2 className="text-2xl md:text-3xl text-white font-semibold mb-4">
          {title}
        </h2>
        <p className="text-gray-400 max-w-3xl mb-10 text-sm md:text-base">
          {description}
        </p>
      </div>
      {children}
    </section>
  )
}