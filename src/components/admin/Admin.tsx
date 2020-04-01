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
    userMassage: string,
    id: number,
    name: string, 
    price: number,
    imgURL: string,
    description: string
}

export default class Admin extends React.Component<Props, State> {
    constructor(props:Props){
        super(props)
        this.state = {
            userMassage: "",
            id: itemsLS[0].id,
            name: itemsLS[0].name, 
            price: itemsLS[0].price,
            imgURL: itemsLS[0].imgURL,
            description: itemsLS[0].description
        }   
    }
    render(){
        return(
            <Container>
                {itemsLS.map((itemData:Product, index:number) =>
                    <ProductAdminList itemData={itemData} key={index} arrayIndex={index}/>
                )}
                <Card variant="outlined">
                    <RenameItem/>
                </Card>
            </Container>
        )
    }
}