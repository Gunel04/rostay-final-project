import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = (props) => {
    // const [theme, setTheme] = useState(localStorage.getItem('mode'));

    // const toggleTheme = () => {
    //     setTheme((curr) => (curr === "light" ? "dark" : "light"));
    //     if (theme === "light") {
    //         localStorage.setItem('mode', 'dark');
    //     }
    //     else {
    //         localStorage.setItem('mode', 'light');
    //     }
    // }
    return (
        <>
            <Header modeFunction={props.modeFunction} mode={props.mode} />
            <Outlet />
            <Footer />
        </>
    )
}

export default MainLayout