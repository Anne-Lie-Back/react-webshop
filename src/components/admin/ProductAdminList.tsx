import React,{useState,CSSProperties} from 'react'
import { Product } from '../items/itemList'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import EditItem from './EditItem'
import IconButton from '@material-ui/core/IconButton'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

interface Props{
    itemData: Product
}

export default function ProductAdminList(props:Props){
    let [selectItem, setSelectItem] = useState<boolean>(false)

    function selected(){
        setSelectItem(toggleItem => !toggleItem)
    }

    return(
        <Card style={adminListStyle} variant="outlined">
            <Typography onClick={selected}>
                <IconButton>
                    {selectItem?  <ExpandLessIcon/> : <ExpandMoreIcon/>}
                </IconButton>
                {'Prod# ' + props.itemData.id + " - " + props.itemData.name} 
            </Typography>
            {selectItem?<EditItem itemData={props.itemData}/> : null}
        </Card>
    )
}

const adminListStyle:CSSProperties = {
    cursor: 'pointer',
    padding: '1em'
}
