import React from 'react'
import Container from '@material-ui/core/Container'
import { Product } from '../items/itemList'
import { itemsLS } from '../ItemListLS'
import Card from '@material-ui/core/Card'
import ProductAdminList from './ProductAdminList'
import RenameItem from './NewItemToggle'

interface Props {
}

interface State {
}

export default class Admin extends React.Component<Props, State> {
    constructor(props:Props){
        super(props)
        this.state = {
        }   
    }

    handleSubmit = (arrayIndex:number, itemData:Product) => {
        itemsLS[arrayIndex] = {
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
                this.setState({userMassage: "Något blev fel"})
            } else {
                this.setState({userMassage: "Ändrat"})
            }
        localStorage.setItem('productList', JSON.stringify(itemsLS))
    }


    render(){
        return(
            <Container>
                {itemsLS.map((itemData:Product, index:number) =>
                    <ProductAdminList itemData={itemData} key={index} arrayIndex={index} handleSubmit={this.handleSubmit}/>
                )}
                <Card variant="outlined">
                    <RenameItem/>
                </Card>
            </Container>
        )
    }
}