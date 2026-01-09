import { useNavigation } from "@react-navigation/native";
import { Container, Title, Logo, Button, ButtonText } from "./style";
import { useCameraPermission } from "react-native-vision-camera";


export default function Home() {
    const navigation = useNavigation<any>()
    const { hasPermission, requestPermission } = useCameraPermission()

    const handleAllow = async () => {
        if (hasPermission) {
            navigation.navigate("Scanner")
            return
        }

        const permission = await requestPermission()

        if (permission) {
            navigation.navigate("Scanner")
        }

    }

    return (
        <Container>
            <Title>LEONARDO L CUNHA</Title>
            <Logo source={{
                uri: 'https://www.pngall.com/wp-content/uploads/5/Pokemon-Go-Logo-PNG-High-Quality-Image.png'
            }} />
            <Button onPress={handleAllow}>
                <ButtonText>Scannear QRCODE</ButtonText>
            </Button>
        </Container>
    )
}