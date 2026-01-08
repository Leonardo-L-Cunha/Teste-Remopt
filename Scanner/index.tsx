import { Container, LoadingText, QrImage } from "./style";
import { Camera, useCodeScanner, useCameraDevice } from "react-native-vision-camera";

export default function Scanner() {
    const device = useCameraDevice('back')
    const codeScanner = useCodeScanner({
        codeTypes: ['qr', 'ean-13'],
        onCodeScanned: (codes) => {
            console.log("data:", codes[0].value)
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
        </Container>
    )
}


