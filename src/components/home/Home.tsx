import React, { CSSProperties } from 'react'
import ViewProduct from './ViewProduct'
//import ProductCard from './ProductCard'
import { items, /*Product*/ } from '../items/itemList'
//import Grid from '@material-ui/core/Grid'

export default function Home() {
    return (
        <div style={homeContainer}>
            <ViewProduct itemData={items[0]}/>
            {/*
            <Grid 
                container
                spacing={3}
                direction="row"
                justify="center"
                alignItems="center"
            >
                {items.map((itemData:Product, index:number) =>
                <Grid key={index}
                item xs={12} sm={6} md={4}
                >
                    <ProductCard itemData={itemData}/>
                </Grid>
                )}
            </Grid>*/}
        </div>
    )
}

const homeContainer: CSSProperties = {
    marginLeft: 'auto',
    marginRight: 'auto'
  }