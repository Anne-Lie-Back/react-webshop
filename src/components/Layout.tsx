import React from 'react'
import Header from './Header';
import Home from './home/Home';
import Footer from './Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CheckOut from './checkout/CheckOut';

export default function Layout() {

    return (
        <BrowserRouter>
        <div>
            <Header/>
                <Switch>
                    <Route path="/checkout">
                        <CheckOut/>
                    </Route>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                </Switch>
            <Footer/>
        </div>
        </BrowserRouter>
    );
}