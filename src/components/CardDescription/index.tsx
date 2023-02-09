interface ICardDescription {
  year: string
  title: string
  description: string
}
const CardDescription = ({
  year,
  title,
  description
}: ICardDescription): JSX.Element => {
  return (
    <div className="mt-16 w-[520px] h-[320px] bg-gradient-to-r from-[#11172B] to-[#313860] hover:brightness-125 rounded-2xl p-4 lg:odd:self-end">
      <section className="flex gap-4 items-baseline">
        <h1 className="text-lg font-jetBrains pt-2 font-bold">
          {title}
        </h1>
        <span className="text-sm font-jetBrains">{year}</span>
      </section>
      <p className="py-2">{description}</p>
    </div>
  )
}

export default CardDescription
