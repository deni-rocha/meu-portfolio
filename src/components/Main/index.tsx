import Projects from "../Projects"
import ProjectsDescription from "../ProjectsDescription"

const Main = (): JSX.Element => {
  return (
    <main className="text-white flex flex-col items-center mt-64 md:mt-20 lg:mt-24 lg:items-start">
      <Projects />
      <h2 className="font-bold text-3xl text-primary self-center mt-36">
        Descrição dos Projetos
      </h2>
      <ProjectsDescription />
    </main>
  )
}

export default Main
