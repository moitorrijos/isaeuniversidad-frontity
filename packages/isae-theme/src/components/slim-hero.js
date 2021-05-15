import React from 'react';
import { styled, connect } from 'frontity';
import colors from '../styles/colors';
import MainContainer from './main-container';
import Grid from './grid';
import Image from '@frontity/components/image';
import createMarkup from '../helpers/create-markup';

const SlimHeroContainer = styled.div`
  padding: 8rem 0;
  background-image: url(${props => props.background ? props.background : ''});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left center;
  background-color: ${props => props.bgColor ? props.bgColor : colors.lightGray};

  @media (max-width: 600px) {
    padding: 4rem 0;
    background-position: center top;
  }

  @media (max-width: 412px) {
    padding: 2rem 0;
  }
`;

const FeaturedImage = styled.figure`
  img {
    width: 550px;
    height: 528px;
    object-fit: cover;
    object-position: center;
    border-radius: 20px;

    @media (max-width: 834px) {
      width: 100%;
    }

    @media (max-width: 600px) {
      height: 480px;
    }

    @media (max-width: 412px) {
      height: 380px;
    }
  }
`;

const DescriptionContainer = styled.div`
  max-width: 575px;
  color: ${colors.primaryText80};
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    font-size: 42px;
    color: ${colors.primaryBlueBright};
  }
`;


const SlimHero = ({ state, background, bgColor, featured_image, title, description }) => {
  const placeholder = state.source.url+'/wp-content/uploads/2021/03/placeholder.jpg';
  return(
    <SlimHeroContainer background={background} bgColor={bgColor}>
      <MainContainer>
        <Grid columns="2" gap="40px">
          <FeaturedImage>
            {featured_image ? <Image src={featured_image} alt={title} /> : <Image src={placeholder} alt={title} />}
          </FeaturedImage>
          <DescriptionContainer>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={createMarkup(description)} />
          </DescriptionContainer>
        </Grid>
      </MainContainer>
    </SlimHeroContainer>
  );
}

export default connect(SlimHero);