import React,{CSSProperties, useState} from 'react'
import IconButton from '@material-ui/core/IconButton'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import NewItem from './NewItem'


export default function RenameItem() {
    let [toggle, setToggle] = useState<boolean>(false)

    function selected(){
        setToggle(toggleItem => !toggleItem)
    }

    return(
        <Container>
            <div style={space}/>
            <Typography variant="h5" onClick={selected} style={toggleEditPage}>
                <IconButton>
                    <AddCircleOutlineOutlinedIcon/>
                </IconButton>
                Ny produkt
            </Typography>  
            {toggle? <NewItem/> : null}
            <div style={space}/>
        </Container>
    )
}


const space:CSSProperties = {
    margin:"0 0 1em 0"
}

const toggleEditPage:CSSProperties = {
    cursor: 'pointer',
}