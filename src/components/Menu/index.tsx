import React from "react";

import { Container, Wrapper, Logo, MenuButton } from "./styles";
import Memeflix from "../../assets/images/memeflix.png";
import { MdAdd } from "../../styles/icons";

const Menu: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <a href="/">
          <Logo src={Memeflix} alt="Memeflix" />
        </a>

        <MenuButton as="a" className="primary" href="/">
          <MdAdd />
          Novo meme
        </MenuButton>
      </Wrapper>
    </Container>
  );
};

export default Menu;
