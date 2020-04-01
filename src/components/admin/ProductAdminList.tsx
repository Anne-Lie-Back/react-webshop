import React,{CSSProperties} from 'react'
import { Product } from '../items/itemList'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import EditItem from './EditItem'
import IconButton from '@material-ui/core/IconButton'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

interface Props{
    itemData: Product
    arrayIndex: number
}

interface State {
    toggleItem: boolean
}

export default class ProductAdminList extends React.Component<Props, State> {
    constructor(props:Props){
        super(props)
        this.state = {
            toggleItem: false
        }   
    }
    
    toggle = () => { this.setState({toggleItem: !this.state.toggleItem})}

    render(){
        return(
            <Card style={adminListStyle} variant="outlined">
                <Typography onClick={this.toggle}>
                    <IconButton>
                        {this.state.toggleItem?  <ExpandLessIcon/> : <ExpandMoreIcon/>}
                    </IconButton>
                    {'Prod# ' + this.props.itemData.id + " - " + this.props.itemData.name} 
                </Typography>
                {this.state.toggleItem?<EditItem itemData={this.props.itemData} arrayIndex={this.props.arrayIndex}/> : null}
            </Card>
        )
    }
}

const adminListStyle:CSSProperties = {
    cursor: 'pointer',
    padding: '1em'
}
