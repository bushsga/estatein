import { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'

type Props = {
  title: string
  description?: string
  icon: ReactNode  // Change from icon to ReactNode
}

export default function ServiceCard({ title, description, icon }: Props) {
  return (
    <div className="bg-[#111116] border border-white/10 rounded-xl p-6 hover:border-purple-500 transition-all duration-300 hover:scale-105 group cursor-pointer">
      <div className="mb-4 text-purple-500 group-hover:scale-110 transition-transform">
        {icon}  {/* Render icon directly as ReactNode */}
      </div>
      <h3 className="text-white font-semibold mb-2">{title}</h3>
      {description && (
        <p className="text-gray-400 text-sm mb-4">{description}</p>
      )}
      <div className="flex items-center gap-1 text-purple-500 text-sm group-hover:gap-2 transition-all">
        Learn More <ArrowRight size={14} />
      </div>
    </div>
  )
}