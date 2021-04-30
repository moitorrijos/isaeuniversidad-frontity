import React, { useState } from 'react';
import { connect, styled } from 'frontity';
import useCarousel from '../../hooks/use-carousel';
import colors from '../../styles/colors';
import SlimHero from '../slim-hero';
import RegisterForm from '../base/register-form';
import MainContainer from '../main-container';
import Image from '@frontity/components/image';
import ValuesCard from '../values-card';
import Carousel from '../carousel';
import Grid from '../grid';
import PostCard from '../post-card';
import ComponentSection from '../component-section';
import Card from '../card';

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
  console.log(acf);
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
      <ComponentSection bgColor={colors.lightGray}>
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
      </ComponentSection>
      <ComponentSection>
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
      </ComponentSection>
      <ComponentSection bgColor={colors.primaryBlueBright}>
          <CenteredHeading color={colors.white}>Otras Publicaciones</CenteredHeading>
          <MainContainer>
            <Grid columns="3" gap="40px">
              <Card
                image_source={acf.otras_publicaciones_1.icono}
                title={acf.otras_publicaciones_1.titulo}
                description={acf.otras_publicaciones_1.listado}
                style={{
                  padding: "4rem 2rem",
                  fontSize: "0.9rem"
                }}
              />
              <Card
                image_source={acf.otras_publicaciones_2.icono}
                title={acf.otras_publicaciones_2.titulo}
                description={acf.otras_publicaciones_2.listado}
                style={{
                  padding: "4rem 2rem",
                  fontSize: "0.9rem"
                }}
              />
              <Card
                image_source={acf.otras_publicaciones_3.icono}
                title={acf.otras_publicaciones_3.titulo}
                description={acf.otras_publicaciones_3.listado}
                style={{
                  padding: "4rem 2rem",
                  fontSize: "0.9rem"
                }}
              />
            </Grid>
          </MainContainer>
      </ComponentSection>
      <LatestActivities background={background}>
        <h2>Actividades Estudiantiles</h2>
        <MainContainer>
          <Carousel height="395px" med_height="820px" large_height="1400px">
            <Grid columns="3" gap="30px" style={carouselItems.item1}>
              {[...latest_activities].slice(0,3).map(activity => {
                const { id, link, title, author, date } = state.source.post[activity.id];
                const { name } = state.source.author[author] || {};
                const postDate = new Date(date);
                const day = postDate.getDate();
                const getMonth = postDate.getMonth();
                const year = postDate.getFullYear();
                return(
                  <PostCard
                    key={id}
                    link={link}
                    title={title}
                    name={name}
                    getMonth={getMonth}
                    day={day}
                    year={year}
                  />
                );
              })}
            </Grid>
            <Grid columns="3" gap="30px" style={carouselItems.item2}>
              {[...latest_activities].slice(3,6).map(activity => {
                const { id, link, title, author, date } = state.source.post[activity.id];
                const { name } = state.source.author[author] || {};
                const postDate = new Date(date);
                const day = postDate.getDate();
                const getMonth = postDate.getMonth();
                const year = postDate.getFullYear();
                return(
                  <PostCard
                    key={id}
                    link={link}
                    title={title}
                    name={name}
                    getMonth={getMonth}
                    day={day}
                    year={year}
                  />
                );
              })}
            </Grid>
            <Grid columns="3" gap="30px" style={carouselItems.item3}>
              {[...latest_activities].slice(6,9).map(activity => {
                const { id, link, title, author, date } = state.source.post[activity.id];
                const { name } = state.source.author[author] || {};
                const postDate = new Date(date);
                const day = postDate.getDate();
                const getMonth = postDate.getMonth();
                const year = postDate.getFullYear();
                return(
                  <PostCard
                    key={id}
                    link={link}
                    title={title}
                    name={name}
                    getMonth={getMonth}
                    day={day}
                    year={year}
                  />
                );
              })}
            </Grid>
          </Carousel>
        </MainContainer>
      </LatestActivities>
      <MainContainer>
        <LatestNewsButtons>
          <button
            onClick={() => { setCurrentItem(1) }}
            style={ currentItem === 1 ? active : inactive}
          >1</button>
          <button
            onClick={() => { setCurrentItem(2) }}
            style={ currentItem === 2 ? active : inactive}
          >2</button>
          <button
            onClick={() => { setCurrentItem(3) }}
            style={ currentItem === 3 ? active : inactive}
          >3</button>
        </LatestNewsButtons>
      </MainContainer>
      <RegisterForm />
    </>
  );
}

export default connect(InvesgitationsPage);