import React from "react"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Main from "../../components/Main"

const Home = (): JSX.Element => {
  return (
    <div className="bg-background text-textLight">
      <div className="w-11/12 mx-auto md:w-3/4">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  )
}

export default Home
