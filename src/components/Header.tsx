import React from 'react'
import { Link } from 'react-router-dom'
import { CartIcon } from './CartIcon'

export default function Header() {

    return (
        <div>
            <h1>Header</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/checkout">Checkout</Link>
                </li>
            </ul>
            <CartIcon />
        </div>
    );
}