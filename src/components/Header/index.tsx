import React from "react";
import { Container, MenuButton, Title } from "./styles";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

interface HeaderProps{
  title: string;
}

function Header(props: HeaderProps) {
  const navigation = useNavigation();

  return (
    <Container>
      <MenuButton onPress={() => navigation.openDrawer()}>
        <Feather name="menu" size={36} color="#FFF" />
      </MenuButton>
      <Title>{props.title}</Title>
    </Container>
  );
}

export default Header;
