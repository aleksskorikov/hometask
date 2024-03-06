import React from "react";
import Footer from '../Components/footer';
import Header from '../Components/header';
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
        <Header />   
        <hr />
            <Outlet />
        <hr />
        <Footer />
        </>
    );
};

export default Layout;