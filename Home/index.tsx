import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Container, Title } from "./style";

export default function Home() {
    const navigation = useNavigation<any>();

    return (
        <Container>
            <Title>Hello World</Title>
        </Container>
    )
}