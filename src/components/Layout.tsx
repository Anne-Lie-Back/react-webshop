import React from 'react'
import Header from './Header';
import Home from './home/Home';
import Footer from './Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CheckOut from './checkout/CheckOut';
import Product from './product/Product';

interface Props{}
interface State{}
export default class Layout extends React.Component<Props, State> {
    render(){
        console.log("from layout")
        console.log(this.props)
         return (
            <BrowserRouter>
            <div>
                <Header/>
                    <Switch>
                        <Route path="/checkout">
                            <CheckOut/>
                        </Route>
                        <Route exact path="/product">
                            <div><h2>Select a product</h2></div>
                        </Route>
                        <Route path="/product/:id">
                            <Product/>
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
}