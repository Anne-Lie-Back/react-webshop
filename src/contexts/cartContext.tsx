import React from 'react'
import { CartItem } from '../typings'
import { items } from '../components/items/itemList'

export const CartContext = React.createContext<State>({
    cartList: [{id:1, nrItems:1}],
    addProduct: () => {},
    removeItemFromCart: () => {}
})

interface Props{}
interface State{
    cartList: Array<CartItem>
    addProduct:(inItemId: number, inNrItems: number) => void
    removeItemFromCart:(inItemId: number) => void
}

export class CartProvider extends React.Component<Props, State>{
    constructor(props: Props){
        super(props)
        this.state = {
            cartList: [],
            addProduct: this.addProduct,
            removeItemFromCart: this.removeItemFromCart
        }
    }

    // Push to array does not work in setState.
    addProduct = (inItemId: number, inNrItems: number) => {
        const cartListPosition = this.findItemInCart(inItemId)
        const updatedCartList = [...this.state.cartList]
        console.log("start cart list")
        console.log(this.state.cartList)
        
        if(cartListPosition !== false){
            updatedCartList[cartListPosition].nrItems = updatedCartList[cartListPosition].nrItems + inNrItems
            if(updatedCartList[cartListPosition].nrItems < 1){
                console.log("negative item count, remove from list")
                this.removeItemFromCart(inItemId)
            } else {
                this.setState({
                    cartList: [...updatedCartList]
                })
            }
            console.log("update cart item " )
            console.log(updatedCartList)
        } else {
            if(inNrItems > 0){
                updatedCartList.push({id: inItemId, nrItems: inNrItems})
                console.log("push new item to list " )
                console.log(updatedCartList)
                this.setState({
                    // cartList: [...this.state.cartList, {id: inItemId, nrItems: inNrItems}]
                    cartList: [...updatedCartList]
                })
            } else {
                console.log("Cannot add zero or negative nr of items.")
            }
        }
    }

    findItemInCart = (InItemId: number) => {
        let itemFound = false
        let cartListPosition = 0
        for (let i = 0; i < this.state.cartList.length; i++) {
            const item = this.state.cartList[i];
            // console.log(item.id + " id and inId: " + InItemId)
            if(item.id === InItemId){
                itemFound = true
                cartListPosition = i
            }
        }

        if(itemFound){
            // console.log("item array position " + cartListPosition)
            return cartListPosition
        } else {
            // console.log("item not found.")
            return false
        }

    }

    removeItemFromCart = (InItemId:number) => {
        const cartListPosition = this.findItemInCart(InItemId)
        let updatedCartList = [...this.state.cartList]
        if(cartListPosition !== false){
            updatedCartList.splice(cartListPosition,1)
            console.log("item removed")
            this.setState({
                cartList: [...updatedCartList]
            })
        } else {
            console.log("item to remove not found.")
        }
    }

    render(){
        return(
            <CartContext.Provider value={this.state}>
                {this.props.children}
            </CartContext.Provider>
        )
    }
}