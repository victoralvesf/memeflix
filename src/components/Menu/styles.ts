import styled from "styled-components";
import Button from "../widgets/LinkButton";

export const Container = styled.header`
  width: 100%;
  height: 94px;
  background: var(--black);
  border-bottom: 2px solid var(--primary);

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

export const Logo = styled.img`
  max-width: 168px;
  -webkit-user-drag: none;

  @media (max-width: 800px) {
    max-width: 128px;
  }
`;

export const MenuButton = styled(Button)`
  @media (max-width: 800px) {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 54px;
    border-radius: 0;
    font-weight: bold;
    font-size: 1.2rem;

    svg {
      display: block;
    }
  }
`;

export const Wrapper = styled.div`
  width: min(1440px, 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 800px) {
    justify-content: center;
  }
`;
