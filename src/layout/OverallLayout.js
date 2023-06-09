import React from "react"
import { Outlet } from "react-router-dom"
import Header from "../components/header/Header"

const OvarallLayout = () => {
    return (
        <React.Fragment>
            <Header />
            <main className="mt-5 pt-1">
                <Outlet />
            </main>

       </React.Fragment>
    )
}

export default OvarallLayout
