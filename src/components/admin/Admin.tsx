import React from 'react'
import Container from '@material-ui/core/Container'
import { items, Product } from '../items/itemList'
import Card from '@material-ui/core/Card'
import ProductAdminList from './ProductAdminList'
import RenameItem from './RenameItem'

export default function Admin() {
    
    if(localStorage.getItem('productList') === null){
        localStorage.setItem('productList', JSON.stringify(items));
    }
    const productList = JSON.parse(localStorage.getItem('productList') || '{}')


    return(
        <Container>
            {productList.map((itemData:Product, index:number) =>
                <ProductAdminList itemData={itemData} key={index} />
            )}
            <Card variant="outlined">
                <RenameItem/>
            </Card>
        </Container>
    )
}