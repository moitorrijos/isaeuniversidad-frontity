import React from "react";
import { styled, connect } from "frontity";

const GeneralPage = ({ state }) => {
  const data = state.source.get(state.router.link);
  const pageData = state.source.page[data.id];
  const { title } = pageData;
  console.log(pageData);

  return(
    <h1>{title.rendered}</h1>
  )
}

export default connect(GeneralPage);