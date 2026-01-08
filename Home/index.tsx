import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Container, Title, Logo, Button, ButtonText } from "./style";
import { useCameraPermission } from "react-native-vision-camera";
import { Text } from "react-native";

export default function Home() {
    const navigation = useNavigation<any>();
    const { hasPermission, requestPermission } = useCameraPermission()

    useEffect(() => {
        const handleAllow = async () => {
            if (!hasPermission) {
                const granted = await requestPermission();
                console.log(granted)
            }
        };
        handleAllow()
    }, [])

    return (
        <Container>
            <Title>LEONARDO L CUNHA</Title>
            <Logo source={{
                uri: 'https://www.pngall.com/wp-content/uploads/5/Pokemon-Go-Logo-PNG-High-Quality-Image.png'
            }} />
            {hasPermission ? (
                <Button onPress={() => navigation.navigate('Scanner')}>
                    <ButtonText>Scannear QRCODE</ButtonText>
                </Button>
            ) : (
                <Text>forneça permisao</Text>
            )}


        </Container>
    )
}