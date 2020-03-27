import React,{ CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


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

    return (
        <Container style={{...headerStyle,...wave.backgroundIMG}} maxWidth={false}>
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
                    <img src={logo} alt="" style={logoStyle}/>
                </Grid>
                <Grid item>
                    <Typography variant="h3" color="error" style={textLogoStyle}>
                        Tekulan
                    </Typography>
                </Grid>
            </Grid>
            </Link>
                <Grid item>
                    <Link to="/checkout">
                        <IconButton color="secondary" 
                            style={{border:'solid #9cba98 0.2em'
                            }}>
                            <ShoppingCartIcon fontSize="large" color="error"/>
                        </IconButton>
                    </Link>
                </Grid>
            </Grid>
        </Container>
    );
}

const headerStyle:CSSProperties = {
    backgroundColor: '#346933',
    width: '100vw',
    height: '8em',
    padding: '1em',
    margin: '0 0 1em 0',
}

const logoStyle:CSSProperties = {
    height: '6em',
}

const textLogoStyle:CSSProperties = {
    WebkitTextStroke: '0.02em black',

}