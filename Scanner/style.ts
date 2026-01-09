import styled from "styled-components/native";
import {Image} from "react-native"

export const Container = styled.View`
 flex:1;
 background-color: #000;
`

export const LoadingText = styled.Text`
 color: #fff;
 font-size:16px;
 align-self:center;
 margin-top:20px;
`

export const QrImage = styled(Image)`
 position: absolute;
 width: 256px;
 height: 256px;
 align-self: center;
 top: 50%;
 transform: translateY(-125px);
 opacity: 0.9;
`

export const Text = styled.Text`
 font-size:14px;
 color: #fff;
 text-align:center;

`