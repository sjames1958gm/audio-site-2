import React from "react"
import { Link as GatsbyLink, graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/seo"
import { Flex, Link, Heading } from "@chakra-ui/react"

export const locationQuery = graphql`
  query LocationsQuery {
    allContentfulLocation {
      cities: nodes {
        id
        latLon {
          lat
          lon
        }
        city
        cityImage {
          fixed {
            ...GatsbyContentfulFixed
          }
          title
        }
        slug
      }
    }
  }
`

const Locations = ({ data }) => {
  return (
    <>
      <SEO title="Locations" />
      <Heading>AudioCORE Locations</Heading>
      <Link
        as={GatsbyLink}
        to="/"
        color="purple.500"
        fontSize="xl"
        textDecor="underline"
      >
        home
      </Link>
      {data.allContentfulLocation.cities.map(city => (
        <Flex
          align="center"
          justify="center"
          direction="column"
          boxShadow="lg"
          p="6"
          rounded="md"
          bg="white"
          my="1rem"
          key={city.id}
        >
          <Link as={GatsbyLink} to={`/location/${city.slug}`} textDecor="none">
            <Heading as="h2" size="md" mb=".5rem" align="center">
              {city.city}
            </Heading>
            <Img alt="" h="100%" fixed={city.cityImage.fixed}></Img>
          </Link>
        </Flex>
      ))}
    </>
  )
}

export default Locations
