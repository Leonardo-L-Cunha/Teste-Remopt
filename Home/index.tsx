import { useNavigation } from "@react-navigation/native";
import { Container, Title, Logo, Button, ButtonText } from "./style";

export default function Home() {
    const navigation = useNavigation<any>();

    return (
        <Container>
            <Title>LEONARDO L CUNHA</Title>
            <Logo source={{
                uri:'https://www.pngall.com/wp-content/uploads/5/Pokemon-Go-Logo-PNG-High-Quality-Image.png'
            }}/>

            <Button onPress={() => navigation.navigate('Scanner')}>
                <ButtonText>Scannear QRCODE</ButtonText>
            </Button>
        </Container>
    )
}