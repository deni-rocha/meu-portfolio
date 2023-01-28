import React from "react"
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai"

function Footer(): JSX.Element {
  function handleRedirect(url: string): void {
    window.open(url)
  }

  function handleScrollTop(): void {
    window.scroll({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <footer className="h-20 items-center justify-end flex mt-40 border-t border-solid border-backgroundLight">
      <div className="w-full flex justify-around">
        <button
          type="button"
          onClick={handleScrollTop}
          className="bg-none border-none text-secondary uppercase font-light text-lg cursor-pointer"
        >
          Voltar ao topo
        </button>
        <section className="flex items-center gap-4">
          <AiOutlineGithub
            className="cursor-pointer w-8 h-8 text-text transition-all hover:text-primary"
            onClick={() =>
              handleRedirect("https://github.com/deni-rocha")
            }
          />
          <AiFillLinkedin
            className="cursor-pointer w-8 h-8 text-text transition-all hover:text-primary"
            onClick={() =>
              handleRedirect(
                "https://www.linkedin.com/in/denilson-rocha-aa0a39202/"
              )
            }
          />
        </section>
      </div>
    </footer>
  )
}

export default Footer
