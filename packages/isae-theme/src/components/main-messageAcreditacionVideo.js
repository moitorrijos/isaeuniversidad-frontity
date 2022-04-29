import React from "react";
import { styled } from "frontity";
import colors from "../styles/colors";
import MainContainer from "./main-container";
import Grid from "./grid";
import Image from "@frontity/components/image";
import createMarkup from "../helpers/create-markup";
import PrimaryButton from "./primary-button";

const Message = styled.div`
  padding: 8rem 0;
  background-color: ${(props) => props.bgColor};
  background-image: url(${(props) =>
    props.background ? props.background : ""});
  background-size: contain;
  background-position: left center;
  background-repeat: no-repeat;

  @media (max-width: 600px) {
    padding: 2rem 0 1rem;
    background-position: left -20px;
  }
`;

const MessageImage = styled.figure`
  align-self: center;

  img {
    width: 100%;
    height: auto;
    min-height: 580px;
    object-fit: cover;
    object-position: center;
    border-radius: 20px;

    @media (max-width: 600px) {
      min-height: auto;
      height: 420px;
      object-position: center 20%;
    }

    @media (max-width: 412px) {
      height: 380px;
    }
  }
`;

const MessageText = styled.div`
  align-self: center;

  h1,
  h2 {
    color: ${colors.primaryBlue};
  }
`;

const MainMessage = ({
  background,
  bgColor,
  imageUrl,
  title,
  description,
  button_1_text,
  button_1_url,
  button_2_text,
  button_2_url,
}) => {
  return (
    <Message background={background} bgColor={bgColor}>
      <MainContainer>
        <Grid columns="2" gap="100px" med_gap="20px" small_gap="20px">
          <MessageImage>
            {/* <Image src={imageUrl} alt="" width={650} height={975} /> */}
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/XZLkBOn9lMw"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            
          </MessageImage>
          <MessageText>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={createMarkup(description)} />
            {button_1_text && button_1_url && (
              <PrimaryButton link={button_1_url} style={{ marginRight: 20 }}>
                {button_1_text}
              </PrimaryButton>
            )}
            {button_2_text && button_2_url && (
              <PrimaryButton link={button_2_url}>{button_2_text}</PrimaryButton>
            )}
          </MessageText>
        </Grid>
      </MainContainer>
    </Message>
  );
};

export default MainMessage;
