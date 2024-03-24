import {useState,useEffect} from 'react';
import { Container,
    Typography,
    Card,
    Button,
    Grid,       
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { IPokemonDetails } from '../Interface/IPokemonDetails';
import { getPokemonID } from '../Api/api';

const PokemonDetail = () =>{
    const [pokemonDetails, setPokemonDetails] = useState<IPokemonDetails>();
    const { ID } = useParams<string>();
  
    useEffect(() => {
      getPokemonID(ID!).then((results) => setPokemonDetails(results));
    }, []);
  
    const formatID = (num: number) => {
      return num.toString().padStart(4, "0");
    };

    if(!pokemonDetails){
        return(
            <Typography>
                Data Not Found
            </Typography>
        )
    }
    return (
        <>
        <Typography align='center'variant='h4' paddingBottom='2%'>
            {pokemonDetails?.name}
        </Typography>
        <Grid container spacing={2}>
            <Grid item xs={6} sx={{padding: 10}}>
                <Card sx={{display:'flex',justifyContent:'center'}}>
                    <img src={pokemonDetails?.official} alt={pokemonDetails?.name} width={'50%'} />
                </Card>
                <Card sx={{marginTop : 5,display:'flex',justifyContent:'center'}}>
                    <img src={pokemonDetails?.sprite} alt={pokemonDetails?.name} width={'50%'}  />
                </Card>
            </Grid>
            <Grid item xs={6}>
                <Card sx={{padding:3}}>
                <Typography variant='body1'>Pokemon ID : {pokemonDetails?.id}</Typography>
                <Typography variant='body1'>Height : {pokemonDetails?.height}</Typography>
                <Typography variant='body1'>Weight : {pokemonDetails?.weight}</Typography>
                <Typography variant='body1' sx={{marginTop: 3 }}>Move :</Typography>
                {pokemonDetails?.moves.map((move,index)=> (
                    <Card sx={{margin:'2%', padding:'2%'}}>
                        <Typography textAlign={'center'}>
                            {move.move.name}
                        </Typography>
                    </Card>
                ))}
                </Card>
            </Grid>
        </Grid>
        
        </>
        
    );
}

export default PokemonDetail;