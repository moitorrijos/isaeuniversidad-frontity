import React from 'react'
import { styled } from 'frontity';
import colors from '../styles/colors';
import MainContainer from './main-container';
import Grid from './grid';
import Image from "@frontity/components/image";
import createMarkup from '../helpers/create-markup';
import PrimaryButton from './primary-button-Blank';

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
    button_3_url,
    button_4_url
  }) => {
  return (
    <Message background={background} bgColor={bgColor}>
      <MainContainer>
        <Grid columns="2" gap="100px" med_gap="20px" small_gap="20px">
          <MessageImage>
            <Image src={imageUrl} alt="" width={650} height={975} />
          </MessageImage>
          <MessageText>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={createMarkup(description)} />
            
              <PrimaryButton link="/tutoriales/#estudiantes" style={{marginRight: 5}}>
                Tutoriales para Estudiantes
              </PrimaryButton><br></br>            
              <PrimaryButton link="/tutoriales/#Docentes" style={{marginRight: 5}}>
              Tutoriales para Docentes
              </PrimaryButton><br></br>                          
              <PrimaryButton link="/tutoriales/#Mteam" style={{marginRight: 5}}>
              Tutoriales Microsoft Teams
              </PrimaryButton>              
              
          </MessageText>
        </Grid>
      </MainContainer>
    </Message>
  )
}

export default MainMessage;