import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { Pokemon } from "../types/pokemon";
import { Container, Text, ImagePokemon, TextContainer, Button, ButtonText } from "./style";

type RouteParams = {
    Details: {
        pokemon: Pokemon
    }
}

export default function Details() {
    const route = useRoute<RouteProp<RouteParams, "Details">>()
    const { pokemon } = route.params
    const navigation = useNavigation<any>()

    return (
        <Container>
            <Text>ID: {pokemon.id}</Text>
            <ImagePokemon source={{ uri: pokemon.image }} />
            <TextContainer>
                <Text>Nome: {pokemon.name}</Text>
                <Text>Type: {pokemon.type}</Text>
                <Button onPress={() => navigation.navigate('Home')}>
                    <ButtonText>Voltar</ButtonText>
                </Button>
            </TextContainer>
        </Container>
    )
}