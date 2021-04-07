//export const data =
// {
//   src: {
//     type: "folder",
//     openChild: false,
//     child: {
//       components: {
//         type: "folder",
//         openChild: false,
//         child: {
//           "app.js": {
//             type: "file"
//           }
//         }
//       }
//     }
//   },
//   public: {
//     type: "folder",
//     openChild: false,
//     child: {
//       components: {
//         type: "folder",
//         openChild: false,
//         child: {
//           "app.js": {
//             type: "file"
//           }
//         }
//       }
//     }
//   },
//   "index.html": {
//     type: "file"
//   }
// };

export const data = [
  {
    name: "src",
    type: "folder",
    child: [
      {
        name: "components",
        type: "folder",
        child: [
          {
            name: "common",
            type: "folder",
            child: [
              {
                name: "common.js",
                type: "file"
              }
            ]
          },
          {
            name: "app.js",
            type: "file"
          }
        ]
      },
      {
        name: "index.js",
        type: "file"
      }
    ]
  },
  {
    name: "public",
    type: "folder",
    child: [
      {
        name: "public-index.html",
        type: "file"
      },
      {
        name: "components",
        type: "folder",
        child: [
          {
            name: "index.js",
            type: "file"
          }
        ]
      }
    ]
  },
  {
    name: "index.html",
    type: "file"
  }
];
