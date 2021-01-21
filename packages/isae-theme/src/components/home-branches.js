import React from 'react';
import { connect, styled } from 'frontity';
import CardItem from './card-item';
import Carousel from './carousel-container';
import MainContainer from './main-container';

const Heading = styled.h1`
  text-align: center;
  font-size: 28px;
  line-height: 1.1;
  max-width: 800px;
  margin: 4rem auto;
`;

const HomeBranches = ({ state }) => {
  const branches = state.source.get('/sede').items;
  return (
    <>
      <Heading>{state.frontity.description}</Heading>
      <MainContainer>
        <Carousel columns="3" gap="40px">
          {[...branches].reverse().map(branch => {
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
        </Carousel>
      </MainContainer>
    </>
  );
};

export default connect(HomeBranches);