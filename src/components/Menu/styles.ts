import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 94px;
  background: var(--black);
  border-bottom: 2px solid var(--primary);

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  position: fixed;
  top: 0;
  left: 0;

  @media (max-width: 800px) {
    justify-content: center;
  }
`;

export const Logo = styled.img`
  max-width: 168px;
  -webkit-user-drag: none;

  @media (max-width: 800px) {
    max-width: 128px;
  }
`;
