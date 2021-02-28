import React from 'react';
import { styled } from 'frontity';
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
  background-color: ${colors.lightGray};
`;

const FeaturedImage = styled.figure`
  img {
    width: 474px;
    height: 528px;
    object-fit: cover;
    object-position: center;
    border-radius: 20px;
  }
`;

const DescriptionContainer = styled.div`
  max-width: 575px;
  color: ${colors.primaryText50};
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    font-size: 42px;
    color: ${colors.primaryBlueBright};
  }
`;


const SlimHero = ({ background, featured_image, title, description }) => {
  return(
    <SlimHeroContainer background={background}>
      <MainContainer>
        <Grid columns="2" gap="40px">
          <FeaturedImage>
            <Image src={featured_image} alt={title.rendered} />
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

export default SlimHero;