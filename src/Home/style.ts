import styled from "styled-components/native";

export const Container = styled.ImageBackground.attrs({
 source: require("../img/background.png"),
 resizeMode: 'cover'
})`
 flex:1;
 align-items:center;
 justify-content:space-around;
`

export const Title = styled.Text`
 color: red;
 margin-bottom:16px;
 font-size: 25px;
`

export const Logo = styled.Image`
 width:220px;
 height:120px;
 margin-bottom:40px;
`

export const Button = styled.TouchableOpacity`
 background-color: #fff;
 padding:12px 24px;
 border-radius:6px;
`

export const ButtonText = styled.Text`
 font-weight:bold;
`