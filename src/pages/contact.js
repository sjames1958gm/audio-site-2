import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import { Heading, Text } from "@chakra-ui/react"

export const contactQuery = graphql`
query ContactsQuery {
    allFormiumForm {
      edges {
        node {
          id
          slug
        }
      }
    }
  }
`

const ContactPage = ({ data }) => {
  console.log(data)
  return (
    <>
      <SEO title="About" />
      <Heading>Contact AudioCORE</Heading>
      <Text>AudioCORE - the first shareable headphone company</Text>
    </>
  )
}

export default ContactPage
