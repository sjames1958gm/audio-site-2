import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import { Heading } from "@chakra-ui/react"
import { FormiumForm, defaultComponents } from "@formium/react"

const TextInput = props => (
  <input style={{ border: "1px red #ddd" }} {...props} />
)
const formiumComponents = {
  ...defaultComponents,
  TextInput,
}

export const contactQuery = graphql`
  query ContactsQuery {
    formiumForm(slug: { eq: "contactform" }) {
      id
      name
      slug
      projectId
      schema
      updateAt
    }
  }
`

const ContactPage = ({ data }) => {
  console.log(data)
  const formiumFormData = data.formiumForm

  return (
    <>
      <SEO title="About" />
      <Heading>Contact AudioCORE</Heading>
      <FormiumForm
        data={formiumFormData}
        components={formiumComponents}
        onSubmit={async values => {
          //   await formium.submitForm(values)
          //   alert("Success!")
        }}
      />
    </>
  )
}

export default ContactPage
