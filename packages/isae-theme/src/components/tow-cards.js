import React from 'react'
import { styled } from 'frontity';
import colors from '../../styles/colors';
import MainContainer from '../main-container';
import Grid from '../grid';

const MisionVision = styled.div`
  padding: 8rem 0;
  background-color: ${colors.primaryBlueBright};

  @media (max-width: 600px) {
    padding: 4rem 0;
  }
`;

const Mision = styled.div`
  background-color: ${colors.white};
  padding: 2rem 4rem 4rem;
  border-radius: 20px;

  @media (max-width: 600px) {
    padding: 2rem;
  }

  h3 {
    color: ${colors.primaryBlueBright};
  }
`;

const TwoCards = ({ title_left, description_left, title_right, description_right }) => {
  return (
    <MisionVision>
      <MainContainer>
        <Grid columns="2" gap="40px">
          <Mision>
            <h3>{title_left}</h3>
            <div dangerouslySetInnerHTML={createMarkup(description_left)} />
          </Mision>
          <Mision>
            <h3>{title_right}</h3>
            <div dangerouslySetInnerHTML={createMarkup(description_right)} />
          </Mision>
        </Grid>
      </MainContainer>
    </MisionVision>
  )
}

export default TwoCards