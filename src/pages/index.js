import React from "react"
import { Link as GatsbyLink } from "gatsby"

import SEO from "../components/seo"
import { Box, Heading, Link, Text } from "@chakra-ui/react"
import Image from "../components/image"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Heading>AudioCORE</Heading>
    <Text fontSize="xl" my={5}>
      Welcome to audioCORE.
    </Text>
    <Image />
    <Box>
      <Link
        as={GatsbyLink}
        textDecor="underline"
        color="purple.500"
        fontSize="xl"
        to="/about-page/"
        mr=".5rem"
      >
        About
      </Link>
      <Link
        as={GatsbyLink}
        textDecor="underline"
        color="purple.500"
        fontSize="xl"
        to="/locations/"
        mr=".5rem"
      >
        Locations
      </Link>
      <Link
        as={GatsbyLink}
        textDecor="underline"
        color="purple.500"
        fontSize="xl"
        to="/contact/"
      >
        Contact Us
      </Link>
    </Box>
  </>
)

export default IndexPage
