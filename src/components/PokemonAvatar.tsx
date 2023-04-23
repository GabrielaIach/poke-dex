import { DetailPokemon } from "../interfaces/pokemon.interface";
import { useEffect, useState } from "react";
import { getColorFromUrl } from "../utils/colors";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

interface PokemonAvatarProps {
  pokemon: DetailPokemon;
}

const PokemonAvatar = ({ pokemon }: PokemonAvatarProps) => {








  return <Card sx={{backgroundColor: pokemon.color}}>
    <CardMedia component="img" sx={{height: 100, objectFit: "contain"}}
        image={pokemon.sprites.other["official-artwork"].front_default}
        title={pokemon.name}
        />
    <CardContent>
        <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <Typography sx={{textTransform: "capitalize", color: "white"}}>{pokemon.name}</Typography>
            <Typography>#{pokemon.id}</Typography>
        </Box>
    </CardContent>
  </Card>
};

export default PokemonAvatar;
