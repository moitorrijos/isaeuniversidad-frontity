const settings = {
  "name": "isae",
  "state": {
    "frontity": {
      "url": "https://www.isaeuniversidad.ac.pa/",
      "title": "ISAE Universidad",
      "description": "La primera universidad particular con 8 sedes nacionales"
    }
  },
  "packages": [
    {
      "name": "isae-theme",
      "state": {
        "theme": {
          "menu": [],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": process.env.WP_SOURCE_URL,
          "postTypes": [
            {
              type: "media",
              endpoint: "media",
              archive: "/media",
            },
            {
              type: "sede",
              endpoint: "sede",
              archive: "/sede"
            },
            {
              type: "ofertaacadmica",
              endpoint: "ofertaacadmica",
              archive: "/ofertaacadmica"
            },
            {
              type: "evento",
              endpoint: "evento",
              archive: "/evento"
            },
            {
              type: "vidauniversitaria",
              endpoint: "vidauniversitaria",
              archive: "/vidauniversitaria"
            },
            {
              type: "carrera",
              endpoint: "carrera",
              archive: "/carrera"
            },
            {
              type: "departamento",
              endpoint: "departamento",
              archive: "/departamento"
            },
            {
              type: "investigacion",
              endpoint: "investigacion",
              archive: "/investigacion"
            }
          ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
