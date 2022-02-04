const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const songTemplate = path.resolve(`src/templates/song.js`);

  const songsQuery = await graphql(`
    query getSongs {
      allWpSong {
        nodes {
          databaseId
          uri
          songTitle
          album
          youTubeVideoID
          artist {
            nodes {
              databaseId
              name
            }
          }
        }
      }
    }
  `);

  if (songsQuery.errors) {
    throw songsQuery.errors;
  }

  const songs = songsQuery.data.allWpSong.nodes;

  // Create individual song pages.
  songs.forEach((song) => {
    const { uri } = song;

    console.log(`Creating page: ${uri}`);
    createPage({
      path: uri,
      component: songTemplate,
      context: {
        song,
      },
    });
  });
};
