import React from 'react'
import Header from './Header';
import Home from './home/Home';
import Footer from './Footer';

export default function Layout() {

    return (
        <div>
            <Header/>
            <Home/>
            <Footer/>
        </div>
    );
}