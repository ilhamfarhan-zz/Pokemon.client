import React from 'react';
import { Container,
    Typography,
    Card,
    Button,
    Grid,       } from '@mui/material';

function pokemonDetail(){
    return (
        <>
        <Typography align='center'variant='h4'>
          Pokemon Name
        </Typography>
        <Grid container spacing={2}>
            <Grid item xs={6} sx={{padding: 20}}>
                <Card>
                    <img src="" alt="" width="250px" />
                </Card>
                <Card sx={{marginTop : 5}}>
                    <img src="" alt="" width="250px" />
                </Card>
            </Grid>
            <Grid item xs={6}>
                <Card sx={{padding:3}}>
                <Typography variant='body1'>Pokemon ID :</Typography>
                <Typography variant='body1'>Height : </Typography>
                <Typography variant='body1'>Weight : </Typography>
                <Typography variant='body1' sx={{marginTop: 3 }}>Move :</Typography>
                <Button sx={{width: '100%' }}>Move Name</Button>
                <Button sx={{width: '100%' }}>Move Name</Button>
                </Card>
            </Grid>
        </Grid>
        
        </>
        
    );
}

export default pokemonDetail;