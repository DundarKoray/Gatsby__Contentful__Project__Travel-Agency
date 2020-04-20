import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import './layout.css'

const Layout = ({children}) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default Layout;