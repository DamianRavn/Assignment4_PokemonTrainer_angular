//importing pokemons as array
export interface Pokemon{
    results: PokemonItem[];

}
//access individual pokemon Items from array 
export interface PokemonItem {
    name: string;
    url: string; // use url extension to provide picture
}
//all the user/trainer data
export type User =
{
    id : number;
    username : string;
    pokemon : PokemonData[];
}
//Default user is unlogged user
export const defaultUser : User =
{
    id: 0,
    username: "",
    pokemon: []
}

export type PokemonData =
{
    name: string,
    image: string,
    deleted: boolean
}