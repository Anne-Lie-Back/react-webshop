import React,{CSSProperties, useState} from 'react'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

export default function RenameItem() {
    let [toggle, setToggle] = useState<boolean>(false)

    function selected(){
        setToggle(toggleItem => !toggleItem)
    }

    return(
        <Container >
            <div style={space}/>
                <Typography variant="h5" onClick={selected} style={toggleEditPage}>
                    <AddCircleOutlineOutlinedIcon fontSize="small"/>Ny produkt
                </Typography>  
                {toggle? <div>
                    <div style={space}/>
                    <FormControl fullWidth>
                        <form autoComplete="off">
                            <TextField required fullWidth label="Namn" variant="outlined"/>
                            <div style={space}/>
                            <TextField required fullWidth label="Pris" variant="outlined"/>
                            <div style={space}/>
                            <TextField required fullWidth label="ImgURL" variant="outlined"/>
                            <div style={space}/>
                            <TextField required fullWidth multiline rowsMax="4" label="Beskrivning" variant="outlined"/>
                            <div style={space}/>
                        </form>
                    </FormControl>
                    <Button variant="outlined" color="primary" fullWidth>
                        <AddCircleOutlineOutlinedIcon/> Lägg till
                    </Button>
                    </div>
                : null}
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