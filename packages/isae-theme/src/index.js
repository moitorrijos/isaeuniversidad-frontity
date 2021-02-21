import Theme from "./components"
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import link from "@frontity/html2react/processors/link";
import menuHandler from "./handlers/menu-handler";

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
        await actions.source.fetch("2");
        await actions.source.fetch("54");
        await actions.source.fetch("47");
        await actions.source.fetch("48");
        await actions.source.fetch("/sede");
        await actions.source.fetch("/ofertaacadmica");
        await actions.source.fetch("/vidauniversitaria");
        await actions.source.fetch("/carrera");
        await actions.source.fetch("/departamento");
        await actions.source.fetch("/category/destacada/");
        await actions.source.fetch("/category/actividades/");
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
