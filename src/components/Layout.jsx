
import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

/**
 * A higher-order component that defines the overall layout of the website, wrapping the Nav and Footer components
 * and rendering the children prop in between. It simplifies the main App.js setup by handling the repetitive inclusion
 * of nav and footer across different pages.
 */

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Nav />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
