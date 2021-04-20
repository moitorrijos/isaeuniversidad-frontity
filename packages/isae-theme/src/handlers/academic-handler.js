const academicHandler = {
  name: "academics",
  priority: 11,
  pattern: "/ofertaacadmica/:slug",
  func: async ({ link, params, state, libraries, force }) => {
    const response = await libraries.source.api.get({
      endpoint: "ofertaacadmica",
      params: { slug: params.slug }
    })
    const [oferta] = await libraries.source.populate({
      response,
      state,
      force
    });
    Object.assign(state.source.data[link], {
      id: oferta.id,
      type: oferta.type,
      isPostType: true,
      isOferta: true
    })
  }
};

export default academicHandler;