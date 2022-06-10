import React from "react";
import { Container, MenuButton, Title } from "./styles";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function Header() {
  const navigation = useNavigation();
  return (
    <Container>
      {/* <MenuButton onPress={() => navigation.openDrawer()}> */}
      <MenuButton onPress={() => alert("teste")}>
        <Feather name="menu" size={36} color="#FFF" />
      </MenuButton>
      <Title>React Prime</Title>
    </Container>
  );
}

export default Header;