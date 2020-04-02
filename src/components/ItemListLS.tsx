import { items, Product } from './items/itemList'

export const itemsLS: Array<Product> = getList()

function getList(){

    let itemList=[]
    if(localStorage.getItem('productList') === null){
        localStorage.setItem('productList', JSON.stringify(items));
    }
    itemList = JSON.parse(localStorage.getItem('productList') || '{}')
    return itemList
}

