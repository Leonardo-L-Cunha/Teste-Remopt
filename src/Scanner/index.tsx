import { Container, LoadingText, QrImage, Text } from "./style";
import { Camera, useCodeScanner, useCameraDevice } from "react-native-vision-camera";
import { getPokemon } from "../service";
import { useNavigation } from "@react-navigation/native";
import { Pokemon } from "../types/pokemon";


export default function Scanner() {
    const device = useCameraDevice('back')
    const navigation = useNavigation<any>()

    const codeScanner = useCodeScanner({
        codeTypes: ['qr', 'ean-13'],
        onCodeScanned: async (codes) => {

            const id = Number(codes[0].value?.replace(/\D/g, ""))

            try {
                const pokemonApi = await getPokemon(id)

                const pokemon: Pokemon = {
                    id: pokemonApi.id,
                    name: pokemonApi.name.toUpperCase(),
                    image: pokemonApi.sprites.front_default,
                    type: pokemonApi.types.map((item:any) => item.type.name.charAt(0).toUpperCase() + item.type.name.slice(1)).join(", ")
                }

                navigation.navigate("Details", { pokemon })

            } catch (error) {
                console.log(error)
            }

        }
    })

    if (!device) {
        return (
            <Container>
                <LoadingText>Carregando câmera...</LoadingText>
            </Container>
        );
    }

    return (
        <Container>
            <Camera
                style={{ flex: 1 }}
                device={device}
                isActive={true}
                codeScanner={codeScanner}
            />
            <QrImage source={require("../img/qrcode-scanner.png")} />
            <Text>Aponte a Câmera para o código QR</Text>
        </Container>
    )
}


