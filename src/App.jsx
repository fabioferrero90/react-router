import "bootstrap/dist/css/bootstrap.min.css"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import Home from "./pages/Home"
import Contatti from "./pages/Contatti"
import About from "./pages/About"
import PostPage from "./pages/PostPage"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" Component={Home} />
          <Route path="/contatti" Component={Contatti} />
          <Route path="/about" Component={About} />
          <Route path="/:id" Component={PostPage} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App