import "./app.css"
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
// Importing Components
import Home from "./Pages/Home/Home"
import List from "./Pages/List/List"
import Login from "./Pages/Login/Login"
import New from "./Pages/New/New"
import Single from "./Pages/Single/Single"

// Importing Dark CSS
import "./dark.css"

// Importing InputFields Data
import { userInputDataLeft, userInputDataRight, productInputDataLeft, productInputDataRight } from "./Pages/inputData"

// Importing darkmodeContext and useContext
import { useContext } from "react"
import { DarkModeContext } from "./context/darkModeContext.js"
export default function App() {
  const { darkMode } = useContext(DarkModeContext)
  return (
    <>
      <div className={darkMode ? "app dark" : "app"}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/users">
              {/* index element ka path nahin hota */}
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New inputLeft={userInputDataLeft} inputRight={userInputDataRight} title="Add New User" />} />
            </Route>
            <Route path="/products">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New inputLeft={productInputDataLeft} inputRight={productInputDataRight} title={"Add New Product"} />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

// Note : Data Table k andar rows or columns donon ka data bnta hai jb k basic table main aisa nahin hota