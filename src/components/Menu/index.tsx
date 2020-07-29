import React from "react";

import { Container, Logo } from "./styles";
import Memeflix from "../../assets/images/memeflix.png";
import { MdAdd } from "../../styles/icons";

import Button from "../widgets/LinkButton";

const Menu: React.FC = () => {
  return (
    <Container>
      <a href="/">
        <Logo src={Memeflix} alt="Memeflix" />
      </a>

      <Button as="a" className="primary" href="/">
        <MdAdd />
        Novo meme
      </Button>
    </Container>
  );
};

export default Menu;
