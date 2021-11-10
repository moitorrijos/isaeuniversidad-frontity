import Theme from "./components"
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import link from "@frontity/html2react/processors/link";
import menuHandler from "./handlers/menu-handler";
import academicHandler from "./handlers/academic-handler";

export default {
  name: "isae-theme",
  roots: {
    theme: Theme
  },
  state: {
    theme: {
      isMobileMenuOpen: false,
    }
  },
  actions: {
    theme: {
      toggleMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
      beforeSSR: async ({ actions }) => {
        //Menus
        await actions.source.fetch("2");
        await actions.source.fetch("54");
        await actions.source.fetch("47");
        await actions.source.fetch("48");
        //Menus
        await actions.source.fetch("/inicio");
        await actions.source.fetch("/media");
        await actions.source.fetch("/sede");
        await actions.source.fetch("/ofertaacadmica");
        await actions.source.fetch("/vidauniversitaria");
        await actions.source.fetch("/carrera");
        await actions.source.fetch("/departamento");
        await actions.source.fetch("/investigacion");
        await actions.source.fetch("/category/destacada/");
        await actions.source.fetch("/category/actividades/");
        await actions.source.fetch("/category/noticias/");
      }
    }
  },
  libraries: {
    source: {
      handlers: [menuHandler, academicHandler],
      html2react: {
        processors: [image, iframe, link],
      },
    }
  }
};
