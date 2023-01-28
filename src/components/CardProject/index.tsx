import React from "react"
import { AiOutlineRightCircle } from "react-icons/ai"

interface ProjetoProps {
  title: string
  type: string
  slug: number
  imgUrl: string
  link: string
}

export default function CardProject({
  title,
  type,
  imgUrl,
  link
}: ProjetoProps): JSX.Element {
  return (
    <div className="mt-16 flex flex-col lg:flex-row">
      <section
        className="w-[520px] h-[320px] relative rounded-3xl flex"
        style={{
          background: `url(${imgUrl}) no-repeat`,
          backgroundSize: "cover"
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-[#11172B] to-[#313860] opacity-75 rounded-3xl hover:opacity-20" />
        <div className="absolute animate-leftIn top-2 left-2">
          <h1 className="text-primary font-semibold text-4xl text_shadow">
            {title}
          </h1>
          <h2 className="text-secondary text-3xl font-light text_shadow">
            - {type}
          </h2>
        </div>
      </section>
      <button
        className="h-16 bg-none border-none self-end"
        type="button"
      >
        <a
          target="_blank"
          className="text-white text-4xl font-light flex pl-2 items-end gap-3 transition-all"
          href={link}
          rel="noreferrer"
        >
          visitar <AiOutlineRightCircle />
        </a>
      </button>
    </div>
  )
}
