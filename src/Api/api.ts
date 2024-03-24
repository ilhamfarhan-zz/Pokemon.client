import axios from "axios";

export const getPokemon = async () => {
    try{
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
        const {results} = await response.data;
        return results;
    }catch(erorr){
        console.log("Error fetching data: ", erorr);
    }  
};
export const getPokemonDetail = async (url : string) => {
    try{
        const response = await axios.get(url);
        const {name, id, weight, height, moves, sprites } = response.data;
        const sprite = sprites.front_default;
        const official = sprites.other["official-artwork"]["front_default"];
        const results = {official, name, id, weight,height, moves, sprite};
        return results;
    }catch(erorr){
        console.log("Error fetching data: ", erorr);
    }
}
export const getPokemonID = async (ID : string) => {
    try{
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${ID}`);
        const { name, id, weight, height, moves, sprites } = response.data;
        const sprite = sprites.front_default;
        const official = sprites.other["official-artwork"]["front_default"];
        const results = { official, name, id, weight, height, moves, sprite };
        return results;
    }catch(erorr){
        console.log("Error fetching data: ", erorr);
    }
}