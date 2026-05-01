type Props = {
  title: string
  subtitle?: string
}

export default function SectionTitle({ title, subtitle }: Props) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl md:text-3xl font-semibold text-white bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 mt-2 max-w-xl text-sm">{subtitle}</p>
      )}
    </div>
  )
}