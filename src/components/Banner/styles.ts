import styled from "styled-components";
import Button from "../widgets/LinkButton";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 518px;
  background-color: var(--black);
  color: var(--white);
  position: relative;
  margin-top: 94px;

  @media (max-width: 800px) {
    min-height: 209px;
  }
`;

export const Wrapper = styled.div`
  width: min(1440px, 90%);
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 5;

  @media (max-width: 800px) {
    width: 100%;
    padding: 20px 30px;
  }
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  width: 100%;
  height: 100%;

  background-image: url("https://img.youtube.com/vi/peMqhSA1l74/maxresdefault.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.3;

  z-index: 1;
`;

export const Text = styled.div`
  width: 50%;
  padding-right: 40px;
  position: relative;

  @media (max-width: 800px) {
    width: 100%;
    padding-right: 0px;
    padding-bottom: 10px;
    text-align: center;
  }
`;

export const Tag = styled.span`
  background-color: var(--primary);
  padding: 15px 25px;
  font-weight: bold;
  border-radius: 4px;
  margin-bottom: 20px;

  @media (max-width: 800px) {
    position: absolute;
    padding: 5px 15px;
    font-size: 14px;
    border-radius: 0px 5px 5px 0px;
    font-weight: normal;

    left: -30px;
    top: -10px;
  }
`;

export const Title = styled.h1`
  font-size: 46px;

  @media (min-width: 800px) {
    margin-top: 26px;
  }

  @media (max-width: 800px) {
    font-weight: 400;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  text-align: left;

  @media (max-width: 800px) {
    font-size: 16px;
  }
`;

export const Link = styled.a`
  width: min(743px, 50%);
  height: auto;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  border: 2px solid var(--primary);
  box-shadow: 0px 10px 15px 5px rgba(0, 0, 0, 0.5);
`;

export const Watch = styled(Button)`
  background-color: var(--grayLight);
  color: var(--black);
  width: 100px;
  font-size: 16px;

  margin: 0 auto;
  margin-top: 25px;

  @media (min-width: 800px) {
    display: none;
  }
`;
