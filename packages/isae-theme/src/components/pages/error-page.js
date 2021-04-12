import React from "react";
import { connect } from "frontity";
import PostHero from "../post-hero";

const contact = `Si necesitas una información urgente por favor comunícate con nosotros al <a href="mailto:info@isaeuniversidad.ac.pa">info@isaeuniversidad.ac.pa</a>.`;
const description404 = `<p>La página que estás buscando ya no está disponible.</p> <p>${contact}</p>`;
const description = `<p>Estamos teniendo problemas con nuestro sitio web.</p> <p>${contact}</p>`;

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