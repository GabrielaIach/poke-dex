import { useEffect, useState } from "react";
import { DetailPokemon } from "../interfaces/pokemon.interface";
import { POKEMON_API_POKEMON_URL } from "../constants";
import { httpClient } from "../api/httpClient";
import { getColorFromUrl } from "../utils/colors";

interface usePokemonProps{
    pokemonName: string | undefined;
}

const usePokemon= ({pokemonName}: usePokemonProps) =>{
    const [pokemon, setPokemon]= useState<DetailPokemon| null>(null)
    const [isLoading, setIsLoading] = useState(false);
    
     useEffect(() =>{
        if(pokemon){
            getPokemonColor()
        }
    }, [pokemon])

    const getPokemonColor = async () => {
        if (pokemon?.sprites?.other["official-artwork"]?.front_default) {
          const color = await getColorFromUrl(
            pokemon.sprites.other["official-artwork"].front_default
          );
          if (color) setPokemon({... pokemon, color}) 
        }
      };


    useEffect(()=>{        
        const fetchPokemon = async () =>{
            if (pokemonName){
                setIsLoading(true)
                const url = `${POKEMON_API_POKEMON_URL}/${pokemonName}`
                const result = await httpClient.get<DetailPokemon>(url);
                if (result ?. data){
                    setPokemon(result.data)
                }
                setIsLoading(false);
            }
        }
        fetchPokemon();
    }, [pokemonName]);

    return{
        pokemon,
        isLoading
    };
};

export default usePokemon;
