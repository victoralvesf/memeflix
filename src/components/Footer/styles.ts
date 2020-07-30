import styled from "styled-components";
import { FooterInterface } from "../../interfaces/FooterInterface";

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 123px;

  background-color: var(--black);
  border-top: 2px solid var(--primary);

  position: fixed;
  bottom: 0;

  img {
    width: 100px;
    margin-bottom: 10px;
  }

  @media (max-width: 800px) {
    display: ${(props: FooterInterface) => (props.home ? "none" : "flex")};
    height: 80px;

    img {
      width: 90px;
      margin-bottom: 5px;
    }
  }
`;

export const Text = styled.div`
  color: var(--white);
  font-size: 16px;

  strong:nth-child(2n) {
    color: var(--primary);
  }

  @media (max-width: 800px) {
    font-size: 14px;
  }
`;
