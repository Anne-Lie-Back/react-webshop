import React,{ CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import { Typography } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import { CartIcon } from './CartIcon'
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function Header() {
    const logo = require("./items/images/logo.png")
    const wave = {
        backgroundIMG: {
            backgroundImage: `url(${require("./items/images/wave.png")})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center'
        }
    }
    let screenSize = useMediaQuery('(min-width:430px)')
    let imageSize = {width:'4em'}
    let headerSize = {height:'6em'}
    if(useMediaQuery('(min-width:430px)')){
        imageSize = {width:'6em'}
        headerSize = {height:'8em'}
    }

    return (
        <Container style={{...headerStyle,...headerSize,...wave.backgroundIMG}} maxWidth={false}>
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
            >   
            <Link to="/" style={{textDecoration: 'underline #9cba98'}}>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                    spacing={3}
                > 
                <Grid item>
                    <img src={logo} alt="" style={imageSize}/>
                </Grid>
                <Grid item>
                    <Typography 
                        variant={screenSize? "h3" : "h5"}
                        color="error" 
                        style={textLogoStyle}
                    >
                        Tekulan
                    </Typography>
                </Grid>
            </Grid>
            </Link>
                <Grid item>
                    <Link to="/checkout">
                        {/* <IconButton color="secondary" 
                            style={{border:'solid #9cba98 0.2em'
                            }}>
                            <ShoppingCartIcon fontSize="large" color="error"/>
                        </IconButton> */}
                        <CartIcon />
                    </Link>
                </Grid>
            </Grid>
        </Container>
    )
}

const headerStyle:CSSProperties = {
    backgroundColor: '#346933',
    width: '100vw',
    height: '8em',
    padding: '1em',
    margin: '0 0 1em 0',
}

const textLogoStyle:CSSProperties = {
    WebkitTextStroke: '0.02em black',
}