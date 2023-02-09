import dataProjectDescription from "../../data/DataProjectDescription"
import CardDescription from "../CardDescription"

const ProjectsDescription = (): JSX.Element => {
  return (
    <>
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
    </>
  )
}

export default ProjectsDescription
