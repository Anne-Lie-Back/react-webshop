import React from 'react'
import { Link } from 'react-router-dom'

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
        </div>
    );
}