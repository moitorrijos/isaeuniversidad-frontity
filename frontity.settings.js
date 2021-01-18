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
          "menu": [
            [
              "Inicio",
              "/"
            ],
            [
              "Sedes",
              "#sedes"
            ],
            [
              "Vida Universitaria",
              "#vida-universitaria"
            ],
            [
              "Conócenos",
              "/conocenos"
            ],
            [
              "Investigación",
              "#investigacion"
            ],
            [
              "UTE",
              "#ute"
            ],
            [
              "ISAE Virtual",
              "isae-virtual"
            ]
          ],
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
          "url": "http://isae.test",
          "postTypes": [
            {
              type: "sede",
              endpoint: "sede",
              archive: "/sede"
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
