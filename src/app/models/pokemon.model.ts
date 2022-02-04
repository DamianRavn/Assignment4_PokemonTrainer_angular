export interface Pokemon{
    name: string;
    url: string; // use url extension to provide picture
}

export type User =
{
    id : number;
    name : string;
    pokemon : string[];
}