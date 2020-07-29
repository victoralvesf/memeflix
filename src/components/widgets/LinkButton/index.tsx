import styled from "styled-components";

const Button = styled.button`
  padding: 10px 15px;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover,
  &:focus {
    opacity: 0.9;
  }

  &.primary {
    background-color: var(--primary);
    color: var(--white);
  }

  &.secondary {
    background-color: var(--blackLighter);
    color: var(--black);
  }

  svg {
    display: none;
    font-size: 1.2rem;
    margin-right: 4px;
  }

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

export default Button;
