import React, {CSSProperties} from 'react'
import ProductCard from './ProductCard'
import { items, product } from '../items/itemList'
import Grid from '@material-ui/core/Grid';

export default function Home() {
    console.log(items)
    return (
        <div style={homeContainer}
        >
            <Grid 
                container
                spacing={3}
                direction="row"
                justify="center"
                alignItems="center"
            >
                {items.map((itemData:product, index:number) =>
                <Grid key={index}
                item xs={12} sm={6} md={4}
                >
                    <ProductCard itemData={itemData}/>
                </Grid>
                )}
            </Grid>
        </div>
    )
}

const homeContainer: CSSProperties = {
    marginLeft: 'auto',
    marginRight: 'auto'
  }