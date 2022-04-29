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

const acreditacionPage = ({ state }) => {
    const acreditacion = state.source.get(state.router.link);
    const post = state.source[acreditacion.type][acreditacion.id];
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
      <ComponentSection>
        <MainContainer>
          <CenteredHeading>Investigaciones</CenteredHeading>
          <Grid columns="5" gap="40px">
            {acf.investigaciones && Object.values(acf.v).map((acreditacion, index) => {
              return(
                <Image key={investigacion} src={investigacion} />
              )
            })}
          </Grid>
        </MainContainer>
      </ComponentSection>
      HOLA 2
      </>
  )
};
export default connect(acreditacionPage);