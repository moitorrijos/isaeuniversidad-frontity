import React, { useState } from 'react';
import { connect, styled } from 'frontity';
import colors from '../../styles/colors';
import useCarousel from '../../hooks/use-carousel';
import CardItem from '../card-item';
// import MainContainer from '../main-container';
import Carousel from '../carousel';
import Grid from '../grid';

const Heading = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  line-height: 1.2;
  color: ${colors.primaryBlue};
  max-width: 677px;
  margin: 6rem auto;
`;

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

const CarouselButtons = styled.div`
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  width: 120px;
  margin: 4rem auto;
`;

const Button = styled.button`
  appearance: none;
  padding: 0;
  width: 12px;
  height: 12px;
  border-radius: 100%;
  background-color: ${colors.primaryText30};
  cursor: pointer;
  border: none;
  outline: 0;
  box-sizing: content-box;
  border-width: 6px;
  border-style: solid;
  transition: all 0.25s ease-in-out;
`;

const HomeBranches = ({ state }) => {
  const branches = state.source.get('/sede').items;
  const [ currentItem, setCurrentItem ] = useState(1);
  const carouselItems = useCarousel(currentItem, setCurrentItem);
  return (
    <>
      <Heading>Nuestras Sedes</Heading>
      <Container>
        <Carousel
          height="550px"
          med_height="960px"
          large_height="1450px"
        >
          <Grid
            columns="3"
            gap="40px"
            style={{...carouselItems.item1, padding: "0 4rem"}}
          >
            {[...branches].reverse().slice(0,3).map(branch => {
              const data = state.source[branch.type][branch.id];
              const { id, link, acf, title } = data;
              return (
                <CardItem
                  key={id}
                  link={link}
                  data={acf}
                  title={title}
                />
              );
            })}
          </Grid>
          <Grid
            columns="3"
            gap="40px"
            style={{ ...carouselItems.item2, padding: "0 4rem" }}
          >
              {[...branches].reverse().slice(3,6).map(branch => {
                const data = state.source[branch.type][branch.id];
                const { id, link, acf, title } = data;
                return (
                  <CardItem
                  key={id}
                  link={link}
                  data={acf}
                  title={title}
                />
                );
              })}
          </Grid>
          <Grid
            columns="3"
            gap="40px"
            style={{ ...carouselItems.item3, padding: "0 4rem" }}
          >
            {[...branches].reverse().slice(6,9).map(branch => {
              const data = state.source[branch.type][branch.id];
              const { id, link, acf, title } = data;
              return (
                <CardItem
                  key={id}
                  link={link}
                  data={acf}
                  title={title}
                />
              );
            })}
          </Grid>
        </Carousel>
        <CarouselButtons>
          <Button
            onClick={() => { setCurrentItem(1) }}
            style={ currentItem === 1 ? { borderColor: colors.primaryBlue } : { borderColor: colors.white }}
          />
          <Button
            onClick={() => { setCurrentItem(2) }}
            style={ currentItem === 2 ? { borderColor: colors.primaryBlue } : { borderColor: colors.white }}
          />
          <Button
            onClick={() => { setCurrentItem(3) }}
            style={ currentItem === 3 ? { borderColor: colors.primaryBlue } : { borderColor: colors.white }}
          />
        </CarouselButtons>
      </Container>
    </>
  );
};

export default connect(HomeBranches);