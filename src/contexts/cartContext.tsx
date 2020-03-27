import React from 'react'
import { CartItem } from '../typings'

export const CartContext = React.createContext<State>({
    cartList: [{id:1, nrItems:1}],
    addProduct: () => {}

})

interface Props{}
interface State{
    cartList: Array<CartItem>
    addProduct:() => void
}

export class CartProvider extends React.Component<Props, State>{
    constructor(props: Props){
        super(props)
        this.state = {
            cartList: [],
            addProduct: this.addProduct
        }
    }

    // Push to array does not work in setState.
    addProduct = () => {
        this.setState({
            cartList: [...this.state.cartList, {id:1, nrItems:2}]
        })
    }

    //TODO add functions: removeProduct(id), addToProduct(id, nrToAdd), subtractFromProduct(id,nrToAdd)

    render(){
        return(
            <CartContext.Provider value={this.state}>
                {this.props.children}
            </CartContext.Provider>
        )
    }
}