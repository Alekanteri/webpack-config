import React from "react"
import img from "./images/avatar.jpeg"

const App = () => {
  return (
    <>
      <div className="image_container"></div>
      <img src={img} alt="" />
      <h1>Hello world</h1>
    </>
  )
}

export default App