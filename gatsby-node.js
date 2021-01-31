/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allContentfulLocation {
        cities: nodes {
          id
          latLon {
            lat
            lon
          }
          city
          cityImage {
            fluid {
              src
            }
            title
          }
          slug
        }
      }
    }
  `)

  console.log(JSON.stringify(data))

  data.allContentfulLocation.cities.forEach(city => {
    const slug = city.slug
    actions.createPage({
      path: "location/" + slug,
      component: require.resolve(`./src/templates/location-template.js`),
      context: { slug: city.slug },
    })
  })
}
