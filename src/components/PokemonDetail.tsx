import { Link, useParams } from "react-router-dom";
import usePokemon from "../hooks/usePokemon";
import { Box, Button, Container, Grid } from "@mui/material";
import PokemonAvatar from "./PokemonAvatar";
import PokemonBasicInfo from "./PokemonBasicInfo";
import PokemonStats from "./PokemonStats";

const PokemonDetail = () =>{
    let {pokemonName} = useParams()
    const { pokemon, isLoading} = usePokemon({pokemonName})
    return(
        <Container>
            <Grid container flexDirection="column" alignItems="center" justifyContent="center" spacing ={2} mt ={1}>
                <Grid item container alignItems="center" justifyContent="center" spacing={2}>
                    {
                        isLoading ? (
                            <Box>Loading... huh?</Box>
                        ) : pokemon ?(
                            <>
                            <Grid item xs={24} sm={6}>
                                <PokemonAvatar pokemon={pokemon} / >
                            </Grid>
                            <Grid item xs={24} sm={6}>
                                <PokemonBasicInfo pokemon={pokemon} / >
                            </Grid>
                            <Grid item xs={24} sm={6}>
                                <PokemonStats pokemon={pokemon} / >
                            </Grid>
                            </>
                        ) : (
                            <Box>Pokemon is not worth knowing</Box>
                        )
                    }
                </Grid>
                <Grid item>
                    <Button component={Link} to={"/"} variant= "contained">
                        Go to Pokemon List  
                    </Button>
                </Grid>
            </Grid>
        </Container>
    )
    }
    export default PokemonDetail;
