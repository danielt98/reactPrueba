import React from 'react'
import { Link,Outlet } from "react-router-dom";

const NavBar = () => {

    return (
        <div>
            <h1>NavBar</h1>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem"
                }}
            >
                <Link to="/prueba">Prueba</Link> |{" "}
                <Link to="">Regresar</Link>
            </nav>
            <Outlet/>

        </div>
    )
}
export default NavBar
