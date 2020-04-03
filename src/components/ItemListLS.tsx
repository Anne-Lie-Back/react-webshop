import { items, Product } from './items/itemList'

export const itemsLS: Array<Product> = getList()

function getList(){
    let itemList=[]
    //Adds the core itemList if local store is empty
    if(localStorage.getItem('productList') === null){
        localStorage.setItem('productList', JSON.stringify(items))
    }
    //Uppdates itemList with Local Store version
    itemList = JSON.parse(localStorage.getItem('productList') || '{}')
    return itemList
}

