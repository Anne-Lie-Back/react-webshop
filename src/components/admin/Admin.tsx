import React from 'react'
import { Product } from '../items/itemList'
import { itemsLS } from '../ItemListLS'
import AdminLayout from './AdminLayout'


interface Props {
}

interface State {
    items: Product[]
}

export default class Admin extends React.Component<Props, State> {
    constructor(props:Props){
        super(props)
        this.state = {
            items: itemsLS
        }   
    }

    handleSubmit = (arrayIndex:number, itemData:Product) => {
            this.state.items[arrayIndex] = {
            id: itemData.id,
            name: itemData.name, 
            price: itemData.price,
            imgURL: itemData.imgURL,
            description: itemData.description
        }
        if( itemData.name === "" ||
            isNaN(itemData.price) ||
            itemData.imgURL === "" ||
            itemData.description === ""){
                //this.setState({userMassage: "Något blev fel"})
                console.log("fail")
            } else {
                //this.setState({userMassage: "Ändrat"})
                console.log("ändrat")
                localStorage.setItem('productList', JSON.stringify(this.state.items))
                this.setState({items: this.state.items})
            }
    }

    delete = (i:number) => {
        let productList = this.state.items
        productList = productList.slice(0, i).concat(productList.slice(i + 1, productList.length))
        this.setState({items: productList})
        localStorage.setItem('productList', JSON.stringify(productList))
    }

    handleNew = (newItem:any) => {
        const productList = itemsLS
        let allIDs = []
        let highestID
        for (let i = 0; i < itemsLS.length; i++) {
            allIDs.push(productList[i].id)
        }
        highestID = Math.max(...allIDs) + 1
        productList.push({
            id: highestID,
            name: newItem.name, 
            price: newItem.price,
            imgURL: newItem.imgURL,
            description: newItem.description
        })
        
        if(
            newItem.name === "" ||
            isNaN(newItem.price) ||
            newItem.imgURL === "" ||
            newItem.description === ""
        ){
            } else {
                localStorage.setItem('productList', JSON.stringify(productList))
            }
    }

    render(){
        return(
            <AdminLayout 
            items={this.state.items}
            delete={this.delete}
            handleSubmit={this.handleSubmit}
            handleNew={this.handleNew}
            />
        )
    }
}