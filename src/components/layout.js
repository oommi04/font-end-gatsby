/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Container } from "react-bootstrap"

import Header from "./header"
import Footer from "./footer"

import "./layout.scss"

const Layout = props => {
  const { children } = props
  return (
    <Container fluid className="layout">
      <Header siteTitle={"oommi03"} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          paddingTop: 20,
          // background: "#282C34",
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </Container>
  )
}

export default Layout
