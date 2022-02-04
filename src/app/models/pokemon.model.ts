//importing pokemons as array
export interface Pokemon{
    results: PokemonItem[];

}
//access individual pokemon Items from array 
export interface PokemonItem {
    name: string;
    url: string; // use url extension to provide picture
}

export type User =
{
    id : number;
    name : string;
    pokemon : string[];
}