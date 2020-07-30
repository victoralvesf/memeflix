import React from "react";

import {
  Container,
  Text,
  Tag,
  Title,
  Description,
  Image,
  BackgroundImage,
  Wrapper,
  Watch,
  Link,
} from "./styles";

import { getImageFromVideoUrl } from "../../utils/getImageFromVideoUrl";

import { BannerInterface } from "../../interfaces/BannerInterface";

const Banner = ({ title, description, url }: BannerInterface) => {
  const imageFromVideo = getImageFromVideoUrl(url);

  return (
    <Container>
      <BackgroundImage />
      <Wrapper>
        <Text>
          <Tag>Novidade</Tag>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Watch as="a" href={url} target="blank">
            Assistir
          </Watch>
        </Text>
        <Link href={url} target="blank">
          <Image src={imageFromVideo} />
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Banner;
