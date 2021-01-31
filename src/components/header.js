import { Box, Heading, Link } from "@chakra-ui/react"
import { Link as GatsbyLink } from "gatsby"
import React from "react"
import ThemeToggle from "./toggle-theme"

const Header = ({ siteTitle }) => (
  <Box as="header" background="rebeccapurple" marginBottom="1.45rem">
    <Box as="div" m="0 auto" w="100%" align="center" maxW="960px" p="1.45rem 1.0875rem">
      <Heading margin="0">
        <Link
          as={GatsbyLink}
          to="/"
          color="white"
          _hover={{ textDecor: "none" }}
        >
          {siteTitle}
        </Link>
      </Heading>
    </Box>
    <Box as="div" position="fixed" right="20px" top="20px">
      <ThemeToggle />
    </Box>
  </Box>
)

export default Header
