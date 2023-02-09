import React, { useState } from "react"
import dataProjects from "../../data/dataProject"
import CardProject from "../CardProject"

const Projects = (): JSX.Element => {
  const [projects] = useState(dataProjects)

  return (
    <>
      {projects.map((item) => {
        return (
          <CardProject
            type={item.type}
            slug={item.id}
            linkWeb={item.linkWeb}
            linkCode={item.linkCode}
            imgUrl={item.thumbnail}
            title={item.title}
            key={item.id}
          />
        )
      })}
    </>
  )
}

export default Projects
