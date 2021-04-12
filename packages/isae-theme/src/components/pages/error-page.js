import React from "react";
import { connect } from "frontity";
import PostHero from "./post-hero";

const description404 = (
  <>
    La página que estás buscando ya no está disponible.
  </>
);

const description = (
  <>
    Oh no! Al parecer hay un error en el sitio. Si necesitas una información urgente por favor comunícate con nosotros al <a href="mailto:info@isaeuniversidad.ac.pa">info@isaeuniversidad.ac.pa</a>.
  </>
);

const ErrorPage = ({ state }) => {
  const data = state.source.get(state.router.link);
  const title = "Algo está mal";
  return (
    <PostHero
      background={state.source.url + "/wp-content/uploads/2021/02/background-isae-6.svg"}
      title={title}
      description={data.is404 ? description404 : description}
      imageUrl={state.source.url + "/wp-content/uploads/2021/04/pexels-startup-stock-photos-212286.jpg"}
    />
  );
}

export default connect(ErrorPage);