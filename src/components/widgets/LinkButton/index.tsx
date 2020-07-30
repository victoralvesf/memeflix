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
`;

export default Button;
