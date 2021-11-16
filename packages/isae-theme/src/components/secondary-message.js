import React from 'react'
import { styled } from 'frontity';
import colors from '../styles/colors';
import MainContainer from './main-container';
import Grid from './grid';
import Image from "@frontity/components/image";
import createMarkup from '../helpers/create-markup';
import PrimaryButton from './primary-button-no-blank';

const Message = styled.div`
  padding: 8rem 0;
  background-color: ${props => props.bgColor};
  background-image: url(${props => props.background ? props.background : ''});
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

  h1, h2 {
    color: ${colors.primaryBlue};
  }
`;

const SecondaryMessage = ({
  background, bgColor, imageUrl, title, description, button_text, button_url
}) => {
  return (
    <Message background={background} bgColor={bgColor}>
      <MainContainer>
        <Grid columns="2" gap="100px" med_gap="20px" small_gap="20px">
          <MessageText>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={createMarkup(description)} />
            {button_url &&
              <PrimaryButton link={button_url}>
                {button_text ? button_text : title}
              </PrimaryButton>}
          </MessageText>
          <MessageImage>
            <Image src={imageUrl} alt="" width={650} height={975} />
          </MessageImage>
        </Grid>
      </MainContainer>
    </Message>
  )
}

export default SecondaryMessage;