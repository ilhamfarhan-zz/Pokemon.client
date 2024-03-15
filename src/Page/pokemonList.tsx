import {Typography,Card,Button } from '@mui/material';

function pokemonList(){
    return (
        <>
        <Typography align='center'variant='h4'>
          List Pokemon 
        </Typography>
        <Card sx={{ maxWidth: 345 }}>
        <img src="" alt="" width="250px" />
        <Button sx={{width: '100%'}}>name</Button>
    </Card>
        </>
    );
}

export default pokemonList;