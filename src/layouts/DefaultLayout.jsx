import { Outlet } from "react-router-dom";
import MainNav from "../components/MainNav.jsx";

const headerMenu = [
   { route: "/", name: "Home", key: "home" },
   { route: "/newpost", name: "Nuovo Post", key: "newpost" },
   { route: "/contatti", name: "Contatti", key: "contatti" },
   { route: "/about", name: "About", key: "about" }
 ];

function DefaultLayout() {
   return (
      <>
         <header>
            <MainNav headerMenu={headerMenu}/>
         </header>
         <main>
            <Outlet />
         </main>
      </>
   )
};

export default DefaultLayout;