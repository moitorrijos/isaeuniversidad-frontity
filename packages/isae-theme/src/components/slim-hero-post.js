import React, { useEffect } from 'react';
import { styled, connect } from 'frontity';
import colors from '../styles/colors';
import { months } from '../helpers/months';
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

const PostInfo = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 20px;
`;

const Author = styled.p`
  color: ${colors.primaryBlueBright};
  font-size: 0.9rem;
`;

const Date = styled.p`
  color: ${colors.primaryBlue300};
`;

const SlimHeroPost = ({ state, background, bgColor, featured_image, title, description, date, author }) => {
  const placeholder = state.source.url+'/wp-content/uploads/2021/03/placeholder.jpg';
  const name = state.source.author[author] || '';
  let postDate, day, getMonth, year;
  useEffect(() => {
    postDate = new window.Date(date);
    day = postDate.getDate();
    getMonth = postDate.getMonth();
    year = postDate.getFullYear();
    console.log(day, getMonth, year);
  });
  return(
    <SlimHeroContainer background={background} bgColor={bgColor}>
      <MainContainer>
        <Grid columns="2" gap="40px">
          <FeaturedImage>
            {featured_image ? <Image src={featured_image} alt={title} /> : <Image src={placeholder} alt={title} />}
          </FeaturedImage>
          <DescriptionContainer>
            <h1>{title}</h1>
            {name && date && <PostInfo>
              <Author>Escrito por: {name}</Author>
              <Date>
                {day} de {months[parseInt(getMonth)]} de {year}
              </Date>
            </PostInfo>}
            <div dangerouslySetInnerHTML={createMarkup(description)} />
          </DescriptionContainer>
        </Grid>
      </MainContainer>
    </SlimHeroContainer>
  );
}

export default connect(SlimHeroPost);