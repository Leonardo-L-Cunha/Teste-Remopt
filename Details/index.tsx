import { RouteProp, useRoute } from "@react-navigation/native";
import { Pokemon } from "../types/pokemon";
import { Container, Text, ImagePokemon, TextContainer } from "./style";

type RouteParams = {
    Details: {
        pokemon: Pokemon
    }
}

export default function Details() {
    const route = useRoute<RouteProp<RouteParams, "Details">>();
    const { pokemon } = route.params

    return (
        <Container>
            <Text>ID: {pokemon.id}</Text>
            <ImagePokemon source={{ uri: pokemon.image }} />
            <TextContainer>
                <Text>Name: {pokemon.name}</Text>
                <Text>Type: {pokemon.type}</Text>
            </TextContainer>
        </Container>
    )
}