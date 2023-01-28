import React, { useState } from "react"
import dataProjects from "../../data/dataProject"
import CardProject from "../CardProject"

const Projects = (): JSX.Element => {
  const [projects] = useState(dataProjects)

  return (
    <div className="flex flex-col items-center mt-36 md:mt-20 lg:mt-12 lg:items-start">
      {projects.map((item) => {
        return (
          <CardProject
            type={item.type}
            slug={item.id}
            link={item.link}
            imgUrl={item.thumbnail}
            title={item.title}
            key={item.id}
          />
        )
      })}
    </div>
  )
}

export default Projects
