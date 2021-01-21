const menuHandler = {
  name: "menus",
  priority: 10,
  pattern: ":id",
  func: async ({ route, params, state, libraries }) => {
    const { api } = libraries.source;
    const { id } = params;
    const response = await api.get({
      endpoint: `/wp-api-menus/v2/menus/${id}`,
    });
    const items = await response.json();
    const currentPageData = state.source.data[route];
    Object.assign(currentPageData, {
      id,
      items: items.items,
      isMenu: true
    });
  }
};

export default menuHandler