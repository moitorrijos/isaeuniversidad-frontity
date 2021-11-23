import React, { useState } from 'react';
import { connect, styled } from 'frontity';
import useCarousel from '../../hooks/use-carousel';
import colors from '../../styles/colors';
import SlimHero from '../slim-hero';
import MainContainer from '../main-container';
import Grid from '../grid';
import ComponentSection from '../component-section';
import Card from '../card-two';

const LatestActivities = styled.div`
  padding: 8rem 0;
  background-image: url(${props => props.background});
  background-repeat: no-repeat;
  background-size: cover;

  h2 {
    padding: 0 4rem 4rem;
    text-align: center;
    color: ${colors.primaryBlueBright};
  }
`;

const CenteredHeading = styled.h2`
  color: ${props => props.color ? props.color : colors.primaryBlue};
  text-align: center;
  padding: 0 2rem 2rem;
`;

const LatestNewsButtons = styled.div`
  max-width: 450px;
  margin: 1rem auto 6rem;
  display: flex;
  flex-flow: row nowrap;

  button {
    flex: 1;
    padding : 1.5rem 3rem;
    border-bottom: 3px solid ${colors.mediumGray};
    cursor: pointer;
    transition: all 0.25 ease-in-out;
  }
`;

const InvesgitationsPage = ({ state }) => {
  const investigation = state.source.get(state.router.link);
  const post = state.source[investigation.type][investigation.id];
  const background = state.source.url+'/wp-content/uploads/2021/02/background-isae-8.svg';
  const { title, featured_image_src, acf } = post;
  const latest_activities = state.source.get('/category/actividades/').items;
  const [ currentItem, setCurrentItem ] = useState(1);
  const carouselItems = useCarousel(currentItem, setCurrentItem);
  const active = { 
    borderBottomColor: colors.primaryBlueBright,
    color: colors.primaryBlueBright
  };
  const inactive = {
    borderBottomColor: colors.mediumGray,
    color: colors.mediumGray
  };
  return(
    <>
      <SlimHero
        title={title.rendered}
        background={state.source.url+'/wp-content/uploads/2021/02/background-isae-7.svg'}
        bgColor={colors.white}
        featured_image={featured_image_src}
        description={acf.descripcion}
      />
      {/* <ComponentSection bgColor={colors.lightGray}>
        <MainContainer>
          <Grid columns="3" gap="40px">
            <ValuesCard
              image_source={acf.group_1.imagen}
              title={acf.group_1.titulo}
              description={acf.group_1.descripcion}
            />
            <ValuesCard
              image_source={acf.group_2.imagen}
              title={acf.group_2.titulo}
              description={acf.group_2.descripcion}
            />
            <ValuesCard
              image_source={acf.group_3.imagen}
              title={acf.group_3.titulo}
              description={acf.group_3.descripcion}
            />
          </Grid>
        </MainContainer>
      </ComponentSection> */}
      {/* <ComponentSection>
        <MainContainer>
          <CenteredHeading>Investigaciones</CenteredHeading>
          <Grid columns="5" gap="40px">
            {acf.investigaciones && Object.values(acf.investigaciones).map((investigacion, index) => {
              return(
                <Image key={investigacion} src={investigacion} />
              )
            })}
          </Grid>
        </MainContainer>
      </ComponentSection> */}
      <ComponentSection bgColor={colors.primaryBlueBright}>
          <CenteredHeading color={colors.white}>Reglamentos Vigentes</CenteredHeading>
          <MainContainer>
            <Grid columns="2" gap="40px">
              <Card
                image_source={acf.otras_publicaciones_1.icono}
                title={acf.otras_publicaciones_1.titulo}
                description={acf.otras_publicaciones_1.listado}
              />
              <Card
                image_source={acf.otras_publicaciones_2.icono}
                title={acf.otras_publicaciones_2.titulo}
                description={acf.otras_publicaciones_2.listado}
              />
              <Card
                image_source={acf.otras_publicaciones_3.icono}
                title={acf.otras_publicaciones_3.titulo}
                description={acf.otras_publicaciones_3.listado}
              />
              <Card
                image_source={acf.otras_publicaciones_4.icono}
                title={acf.otras_publicaciones_4.titulo}
                description={acf.otras_publicaciones_4.listado}
              />
              <Card
                image_source={acf.otras_publicaciones_5.icono}
                title={acf.otras_publicaciones_5.titulo}
                description={acf.otras_publicaciones_5.listado}
              />
            </Grid>
          </MainContainer>
      </ComponentSection>
      
      
    </>
  );
}

export default connect(InvesgitationsPage);