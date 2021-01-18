import Theme from "./components"
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import link from "@frontity/html2react/processors/link";

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

export default {
  name: "isae-theme",
  roots: {
    theme: Theme
  },
  state: {
    theme: {}
  },
  actions: {
    theme: {
      beforeSSR: async ({ actions }) => {
        await actions.source.fetch("54");
        await actions.source.fetch("47");
        await actions.source.fetch("48");
        await actions.source.fetch("/sede");
      }
    }
  },
  libraries: {
    source: {
      handlers: [menuHandler],
      html2react: {
        processors: [image, iframe, link],
      },
    }
  }
};
