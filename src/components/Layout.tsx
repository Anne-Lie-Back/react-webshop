import React from 'react'
import Header from './Header';
import Home from './home/Home';
import Footer from './Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CheckOut from './checkout/CheckOut';
import ProductPage from './product/ProductPage';
import Admin from './admin/Admin';

interface Props{}
interface State{}
export default class Layout extends React.Component<Props, State> {

    render(){
         return (
            <BrowserRouter>
                <div >
                </div>
                <Header/>
                    <div style={{minHeight: 'calc(100vh - 15em)'}}>
                        <Switch>
                            <Route path="/checkout">
                                <CheckOut/>
                            </Route>
                            <Route path="/admin">
                                <Admin/>
                            </Route>
                            <Route exact path="/product">
                                <div><h2>Select a product</h2></div>
                            </Route>
                            <Route path="/product/:id">
                                <ProductPage/>
                            </Route> 
                            <Route exact path="/">
                                <Home/>
                            </Route>
                        </Switch>
                    </div>
                <Footer/>
            </BrowserRouter>
        );   
    }
}

