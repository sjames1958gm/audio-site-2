/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import { Box, Flex, Link } from "@chakra-ui/react"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header m="0 auto" siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Flex
        as="main"
        direction="column"
        m="0 auto"
        align="center"
        maxWidth="960px"
        p="0 1.0875rem 1.45rem"
      >
        {children}
        <Box as="hr" h="10px" w="90%" mt=".5rem"></Box>
        <Box as="footer" marginTop="2rem" fontSize="xl">
          © {new Date().getFullYear()}, Built by
          {` `}
          <Link
            isExternal
            textDecor="underline"
            color="purple.500"
            href="https://www.gatsbyjs.com"
          >
            Silgarth
          </Link>
        </Box>
      </Flex>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
