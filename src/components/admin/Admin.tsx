import React from 'react'
import Container from '@material-ui/core/Container'
import { Product } from '../items/itemList'
import { itemsLS } from '../ItemListLS'
import Card from '@material-ui/core/Card'
import ProductAdminList from './ProductAdminList'
import RenameItem from './NewItemToggle'

export default function Admin() {
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