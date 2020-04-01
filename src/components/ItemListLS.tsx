import { Product } from './items/itemList'


export const itemsLS: Array<Product> = JSON.parse(localStorage.getItem('productList') || '{}')