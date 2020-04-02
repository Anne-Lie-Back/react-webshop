import React from 'react'
import { CartContext } from '../contexts/cartContext';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Divider, Typography, Hidden } from '@material-ui/core';

import { Link } from 'react-router-dom';

export default function ShoppingCart() {

    return (
        <CartContext.Consumer>
            {(cartState) => (
                <div >
                    <List>
                    {cartState.cartList?.length > 0 ? 
                        cartState.cartList.map(cartItem =>
                            <div key={cartItem.id}>
                                <ListItem >
                                    <Hidden only="xs">
                                    <ListItemAvatar>
                                        <Avatar src={cartItem.product.imgURL}/>
                                    </ListItemAvatar>
                                    </Hidden>
                                    <ListItemText primary={<Typography noWrap><Link to={"product/"+ cartItem.id}>{cartItem.product.name}</Link></Typography> } />
                                    {/* <div style={nextFlex}>
                                        <ListItemText primary={<Typography noWrap >{cartItem.nrItems + " st "}</Typography> } />
                                    </div> */}
                                    <div style={flexStyle}>
                                    <ListItemText primary={
                                        <Typography noWrap align="center">
                                            {cartItem.nrItems + " st  " + cartItem.product.price + " kr"}
                                        </Typography> 
                                        } />
                                    </div>
                                </ListItem>
                            <Divider/>
                            </div>
                        )
                        : undefined //show nothing if cart is empty.
                    }
                    <ListItem>
                    <ListItemText primary={
                        <Typography noWrap align="right" variant="h6" color="primary">
                            {"Total: " + cartState.cartTotalPrice + "kr"}
                        </Typography> 
                        } />
                    </ListItem>
                    </List>
                </div>
            )}
        </CartContext.Consumer>
    );
}

const flexStyle: React.CSSProperties = {
    // display: "flex",
    // flexDirection: "row"
    display: "flex",
    flexDirection: "row",
    alignItems: "right"
}

// const nextFlex: React.CSSProperties = {
//     display: "flex",
//     flexDirection: "row",
//     alignItems: "center",
//     alignSelf: "center"
// }