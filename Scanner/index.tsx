import { Container, LoadingText, QrImage, Text } from "./style";
import { Camera, useCodeScanner, useCameraDevice } from "react-native-vision-camera";
import { getPokemon } from "../service";
import { useNavigation } from "@react-navigation/native";
import { useRef } from "react";

export default function Scanner() {
    const device = useCameraDevice('back')
    const navigation = useNavigation<any>()

    const isScanning = useRef(false)

    const codeScanner = useCodeScanner({
        codeTypes: ['qr', 'ean-13'],
        onCodeScanned: async (codes) => {
            
            if (!isScanning.current) {
                return 
            }
            
            const id = Number(codes[0].value?.replace(/\D/g, ""))

            try {
                isScanning.current = true

                const pokemon  = await getPokemon(id)

                navigation.navigate("Details", {
                    pokemon
                });
            } catch (error) {
                isScanning.current = false
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


