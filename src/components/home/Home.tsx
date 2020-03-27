import React from 'react'
import ProductCard from './ProductCard'
import { items, Product } from '../items/itemList'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import TextMobileStepper from './TextMobileStepper'

export default function Home() {
    console.log(items)
    return (
        <div>
            <TextMobileStepper/>
            <Container>
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
                </Grid>
            </Container>
        </div>
    )
}

