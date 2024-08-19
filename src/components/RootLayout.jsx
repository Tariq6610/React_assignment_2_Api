import { Outlet } from "react-router-dom";
import Getdata from "./Api";
import Card from "./Card";
import 'bootstrap/dist/css/bootstrap.css'

export default function Layout(){
    return (
      <>
        <header>
          <nav className="navbar bg-body-tertiary border-dark border shadow">
            <div className="container-fluid">
              <a style={{fontFamily : "sans-serif", color: "red"}} className="navbar-brand fw-bold logo" href="#">
                Logo
              </a>
            </div>
          </nav>
        </header>
        <main>
          <Outlet />
        </main>
      </>
    );
}