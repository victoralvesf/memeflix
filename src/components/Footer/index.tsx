import React from "react";

import { Container, Text } from "./styles";
import { Logo } from "../Menu/styles";
import Memeflix from "../../assets/images/memeflix.png";

import { FooterInterface } from "./FooterInterface";

const Footer = ({ home }: FooterInterface) => {
  return (
    <Container home={home}>
      <Logo src={Memeflix} alt="Memeflix" />
      <Text>
        Site feito na
        <strong> #ImersãoReact </strong>
        da <strong>Alura</strong>
      </Text>
    </Container>
  );
};

export default Footer;
