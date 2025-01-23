import { Outlet } from "react-router-dom"
import MainNav from "../components/MainNav"

function DefaultLayout() {

   return (
      <>
         <header>
            <MainNav />
         </header>
         <main>
            <Outlet />
         </main>
      </>
   )
}

export default DefaultLayout