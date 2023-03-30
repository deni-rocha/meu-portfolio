import dealta from "../assets/dealta.png"
import dealtaApi from "../assets/deAlta-api.png"
import pokebook from "../assets/pokebook.png"

const dataProjects = [
  {
    id: 1,
    title: "De alta",
    type: "website",
    description: "veja as músicas mais ouvidas no mundo e no brasil",
    linkWeb: "https://dealta.vercel.app",
    linkCode: "https://github.com/deni-rocha/deAlta.git",
    thumbnail: dealta
  },
  {
    id: 2,
    title: "API REST",
    type: "backend",
    description: "api rest com Node.js e Express.js",
    linkWeb: "https://dealta2-api.vercel.app/api",
    linkCode: "https://github.com/deni-rocha/dealta2-api.git",
    thumbnail: dealtaApi
  },
  {
    id: 3,
    title: "Pokebook",
    type: "website",
    description: "veja informações de seus Pokémons favoritos",
    linkWeb: "https://pokebook-br.vercel.app/",
    linkCode: "https://github.com/deni-rocha/pokebook",
    thumbnail: pokebook
  }
]

export default dataProjects
