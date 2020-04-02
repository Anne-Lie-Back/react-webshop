import React,{CSSProperties} from 'react'
import {RouteComponentProps , withRouter } from 'react-router-dom';
import { RouteMatch } from '../../typings';
import { Product} from '../items/itemList';
import { itemsLS } from '../ItemListLS'
import ViewProduct from './ViewProduct'
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

interface Props extends RouteComponentProps{
    match: RouteMatch
}
interface State{
    // itemFound: boolean
    selectedItem: Product | undefined
}

class ProductPage extends React.Component<Props, State>  {
    constructor(props: Props){
        super(props)
        this.state = {
            // itemFound: false,
            selectedItem: undefined
        }
    }

    findProduct(inUrlId: string){
        let foundIt = false
        for(let item of itemsLS){
            if(item.id === parseInt(inUrlId)){
                // console.log("found it! " + inUrlId)
                // foundIt = true itemFound: true,
                this.setState({selectedItem: item})
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
        if(this.state.selectedItem){
            return (
                <div>
                    <Link to="/" style={backButtonLink}>
                        <IconButton color="primary">
                            <ArrowBackIcon/>
                        </IconButton>
                    </Link>
                    <ViewProduct itemData={this.state.selectedItem} />
                </div>
            );
        } else{
            return(
                <div>
                    <Link to="/" style={backButtonLink}>
                        <IconButton color="primary">
                            <ArrowBackIcon/>
                        </IconButton>
                    </Link>
                    <h3>Product not found.</h3>
                </div>
            )
        }
    } 

}

export default withRouter(ProductPage)

const backButtonLink:CSSProperties ={
    border: 'solid 0.15em #558b2f',
    position:'absolute',
    left: '1em', 
    borderRadius:'3em',
    textDecoration:'none',
}