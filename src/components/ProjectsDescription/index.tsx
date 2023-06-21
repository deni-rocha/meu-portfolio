import dataProjectDescription from "../../data/DataProjectDescription"
import CardDescription from "../CardDescription"

const ProjectsDescription = (): JSX.Element => {
  return (
    <ul className="flex flex-col gap-12 lg:w-full">
      {dataProjectDescription.map((item) => {
        return (
          <CardDescription
            key={item.id}
            year={item.year}
            title={item.title}
            description={item.description}
          />
        )
      })}
    </ul>
  )
}

export default ProjectsDescription
