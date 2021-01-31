import React from "react"
import { Link as GatsbyLink } from "gatsby"

import SEO from "../components/seo"
import { Heading, Link, Text } from "@chakra-ui/react"

const AboutPage = () => (
  <>
    <SEO title="About" />
    <Heading>About AudioCORE</Heading>
    <Text>AudioCORE - the first shareable headphone company</Text>
    <Link
      as={GatsbyLink}
      to="/"
      color="purple.500"
      fontSize="xl"
      textDecor="underline"
    >
      home
    </Link>
  </>
)

export default AboutPage
