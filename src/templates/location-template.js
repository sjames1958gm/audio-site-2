import React from "react"
import { graphql, Link as GatsbyLink } from "gatsby"
import { Box, Flex, Heading, Link } from "@chakra-ui/react"
import Img from "gatsby-image"

const location = ({ data }) => {
  console.log(data.location)
  return (
    <Flex direction="column" align="center">
      <Heading as="h2" fontSize="2xl" align="center" mb=".5rem">
        {data.location.city}
      </Heading>
      <Img fixed={data.location.cityImage.fixed}></Img>
      <Box mt=".5rem">
        <Link
          as={GatsbyLink}
          to={`/`}
          pr=".5rem"
          textDecor="underline"
          color="purple.500"
        >
          Home
        </Link>
        <Link
          as={GatsbyLink}
          to={`/locations`}
          textDecor="underline"
          color="purple.500"
        >
          Locations
        </Link>
      </Box>
    </Flex>
  )
}

export const locationQuery = graphql`
  query getLocation($slug: String) {
    location: contentfulLocation(slug: { eq: $slug }) {
      id
      cityImage {
        fixed {
          ...GatsbyContentfulFixed
        }
      }
      city
      slug
    }
  }
`

export default location
