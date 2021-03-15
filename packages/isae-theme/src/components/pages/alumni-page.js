import React from 'react';
import { connect, styled } from 'frontity';
import colors from '../../styles/colors';
import { effects } from '../../styles/effects';
import SlimHero from '../slim-hero';
import MainContainer from '../main-container';
import Grid from '../grid';
import Image from "@frontity/components/image";
import createMarkup from '../../helpers/create-markup';
import RegisterForm from '../base/register-form';
import PostCard from '../post-card';

const MisionVision = styled.div`
  padding: 8rem 0;
  background-color: ${colors.lightGray};
`;

const Card = styled.div`
  margin: 6rem 0;
  display: grid;
  grid-template-rows: 100px auto auto;
  grid-template-columns: 1fr;
  justify-items: center;
  padding: 4rem 3rem;
  background-color: ${colors.white};
  border-radius: 20px;
  transition: all 0.25s ease-in-out;

  h2 {
    text-align: center;
    line-height: 1.1;
    color: ${colors.primaryBlueBright}
  }

  &:hover {
    transform: ${effects.transform};
    box-shadow: ${effects.boxShadow};
  }
`;

const CardImage = styled.figure`
  width: 80px;
  height: 80px;
  margin: 0;

  img {
    width: 80px;
    height: 80px;
    object-fit: contain;
    object-position: center;
  }
`;

const CardDescription = styled.div`
  align-self: start;
`;

const Values = styled.div`
  background-image: url(${props => props.bgImage});
  background-repeat: no-repeat;
  background-size: 100%;
  padding: 8rem 0;

  h2 {
    margin: 1rem 0 8rem;
    color: ${colors.primaryBlue};
    text-align: center;
  }
`;

const ValuesCard = styled.div`
  h3 {
    color: ${colors.primaryBlueBright};
  }
`;

const ValuesImage = styled.figure`
  img {
    width: 100%;
    height: 176px;
    object-fit: cover;
    border-radius: 18px;
  }
`;

const LatestActivities = styled.div`
  padding: 8rem 0;
  background-image: url(${props => props.bgImage});
  background-repeat: no-repeat;
  background-size: cover;

  h2 {
    padding: 0 4rem 4rem;
    text-align: center;
    color: ${colors.primaryBlueBright};
  }
`;

const AlumniPage = ({ state }) => {
  const alumni = state.source.page[90944];
  const { acf, title } = alumni;
  const background = state.source.url+'/wp-content/uploads/2021/02/background-isae-7.svg';
  const featured_image = acf.imagen_principal.url;
  const description = acf.descripcion;
  const bgImage = state.source.url+'/wp-content/uploads/2021/02/background-isae-8.svg';
  const latest_activities = state.source.get('/category/actividades/').items;
  return(
    <>
      <SlimHero
        background={background}
        bgColor={colors.white}
        featured_image={featured_image}
        title={title.rendered}
        description={description}
      />
      <MisionVision>
        <MainContainer>
          <Grid columns="3" gap="60px">
            <Card>
              <CardImage>
                <Image src={state.source.url+'/wp-content/uploads/2021/03/mision.svg'} />
              </CardImage>
              <h2>{acf.mision.titulo}</h2>
              <CardDescription dangerouslySetInnerHTML={createMarkup(acf.mision.descripcion)} />
            </Card>
            <Card>
              <CardImage>
                <Image src={state.source.url+'/wp-content/uploads/2021/03/vision.svg'} />
              </CardImage>
              <h2>{acf.vision.titulo}</h2>
              <div dangerouslySetInnerHTML={createMarkup(acf.vision.descripcion)} />
            </Card>
            <Card>
              <CardImage>
                <Image src={state.source.url+'/wp-content/uploads/2021/03/objetivos.svg'} />
              </CardImage>
              <h2>{acf.objetivos.titulo}</h2>
              <div dangerouslySetInnerHTML={createMarkup(acf.objetivos.descripcion)} />
            </Card>
          </Grid>
        </MainContainer>
      </MisionVision>
      <Values bgImage={bgImage}>
        <MainContainer>
          <h2>Valores</h2>
          <Grid columns="4" gap="30px">
            <ValuesCard>
              <ValuesImage>
                <Image src={state.source.url+'/wp-content/uploads/2021/03/Rectangle5.jpg'} />
              </ValuesImage>
              <h3>{acf.compromiso_social.titulo}</h3>
              <p>{acf.compromiso_social.descripcion}</p>
            </ValuesCard>
            <ValuesCard>
              <ValuesImage>
                <Image src={state.source.url+'/wp-content/uploads/2021/03/Rectangle6.jpg'} />
              </ValuesImage>
              <h3>{acf.pluralidad.titulo}</h3>
              <p>{acf.pluralidad.descripcion}</p>
            </ValuesCard>
            <ValuesCard>
              <ValuesImage>
                <Image src={state.source.url+'/wp-content/uploads/2021/03/Rectangle7.jpg'} />
              </ValuesImage>
              <h3>{acf.excelencia.titulo}</h3>
              <p>{acf.excelencia.descripcion}</p>
            </ValuesCard>
            <ValuesCard>
              <ValuesImage>
                <Image src={state.source.url+'/wp-content/uploads/2021/03/Rectangle8.jpg'} />
              </ValuesImage>
              <h3>{acf.ciudadania.titulo}</h3>
              <p>{acf.ciudadania.descripcion}</p>
            </ValuesCard>
          </Grid>
        </MainContainer>
      </Values>
      <RegisterForm egresado={true} />
      <LatestActivities bgImage={bgImage}>
        <h2>Actividades de los Egresados</h2>
        <MainContainer>
          <Grid columns="3" gap="30px">
            {[...latest_activities].reverse().map(activity => {
              const { id, link, title, author, date } = state.source.post[activity.id];
              const { name } = state.source.author[author];
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
        </MainContainer>
      </LatestActivities>
    </>
  );
}

export default connect(AlumniPage);