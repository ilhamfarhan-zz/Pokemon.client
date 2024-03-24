import {Typography,Card,Button,Grid,Box } from '@mui/material';
import { IPokemonList } from '../Interface/IPokemonList';
import { IPokemonDetails } from '../Interface/IPokemonDetails';
import { getPokemon, getPokemonDetail } from '../Api/api';
import {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';



const PokemonList = () =>{
    
    const [pokemonList,setPokemonList] = useState<IPokemonList[]>([]);
    const [pokemonDetail,setPokemonDetail] = useState<IPokemonDetails[]>([]);

    useEffect(() => {
        getPokemon().then((results) => setPokemonList(results));
    },[]);

    useEffect(() => {
        const getAllPokemon = async () => {
            const detailsPromises = pokemonList.map(async (pokemon) => {
                return await getPokemonDetail(pokemon.url);
            });
            const details = (await Promise.all(detailsPromises)).filter(detail => detail !== undefined) as IPokemonDetails[];
            setPokemonDetail(details);
        };
        getAllPokemon();
    },[pokemonList]);

    return (
        <>
        <Typography align='center'variant='h4'>
          List Pokemon 
        </Typography>
      <Grid container sx={{justifyContent:'center'}}>
        {pokemonDetail?.map((pokemon,index) => (
        <Card sx={{ maxWidth: 345,  maxHeight : '100%',margin:'0.5%'}}>
        <img src={pokemon.official} alt={pokemon.name} width={'100%'}/>
        <Link to={`/pokemonDetail/${pokemon.id}`}>
        <Button sx={{width: '100%',padding:'5%'}}>{pokemon.name}</Button>
        </Link>
    </Card>
    ))}
      </Grid>
        
        </>
    );
}

export default PokemonList;