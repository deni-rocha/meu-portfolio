import React from "react"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Projects from "../../components/Projects"

const Home = (): JSX.Element => {
  return (
    <div className="bg-background text-textLight">
      <div className="w-11/12 mx-auto md:w-3/4">
        <Header />
        <Projects />
        <Footer />
      </div>
    </div>
  )
}

export default Home
