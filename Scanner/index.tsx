import { Container, Text, Qrscanner } from "./style";

export default function Scanner() {
    
    return (
        <Container>
            <Qrscanner/>
            <Text>Aponte a câmera para o código QR</Text>
            
        </Container>
    )
}