import React,{CSSProperties} from 'react'
import Container from '@material-ui/core/Container'
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';

export default function Footer() {

    return (
        <Container style={footerStyle} maxWidth={false}>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Grid item>
                    <Typography color="error" variant="body2">
                        Tekulan AB
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography color="error" variant="body2">
                        VägGatan 34
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography color="error" variant="body2">
                        123 45 Stadeborg
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography color="error" variant="body2">
                        +4699-0253 6456
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

const footerStyle:CSSProperties = {
    backgroundColor: '#346933',
    width: '100vw',
    position: 'relative',
    bottom: 0,
    height: '7em',
    padding: '1em',
    margin: '1em 0 0 0',
}