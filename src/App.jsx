import { BrowserRouter, Routes, Route } from "react-router-dom"

import DefaultLayout from "./layouts/DefaultLayout"
import Home from "./pages/Home"
import Contatti from "./pages/Contatti"
import About from "./pages/About"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" Component={Home} />
          <Route path="/contatti" Component={Contatti} />
          <Route path="/about" Component={About} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App