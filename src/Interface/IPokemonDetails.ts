export interface IPokemonDetails {
    official : string,
    name : string,
    id : number,
    height : number,
    weight : number,
    moves : Move[],
    sprite : string
}
interface Move{
    move : any
}