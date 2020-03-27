import React from 'react'
import {RouteComponentProps , withRouter } from 'react-router-dom';
import { RouteMatch } from '../../typings';
import { items, Product} from '../items/itemList';
import ViewProduct from './ViewProduct'

interface Props extends RouteComponentProps{
    match: RouteMatch
}
interface State{
    itemFound: boolean
    selectedItem: Product | undefined
}

class ProductPage extends React.Component<Props, State>  {
    constructor(props: Props){
        super(props)
        this.state = {
            itemFound: false,
            selectedItem: undefined
        }
    }

    findProduct(inUrlId: string){
        let foundIt = false
        for(let item of items){
            if(item.id === parseInt(inUrlId)){
                // console.log("found it! " + inUrlId)
                foundIt = true
                this.setState({itemFound: true, selectedItem: item})
            }
        }
        if(!foundIt){
            console.log("not found: " + inUrlId)
        }
    }
    componentDidMount(){
        this.findProduct(this.props.match.params.id)
    }
    render(){
        if(this.state.itemFound){
            return (
                <div>
                    <ViewProduct itemData={this.state.selectedItem} />
                </div>
            );
        } else{
            return(
                <h3>Product not found.</h3>
            )
        }
    } 

}

export default withRouter(ProductPage)
