import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Location } from "@reach/router"
import { Image, Navbar, Nav } from "react-bootstrap"

import "./header.scss"

const query = graphql`
  query {
    file(relativePath: { eq: "scglogo.png" }) {
      childImageSharp {
        fixed(width: 200, height: 70) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const Header = props => {
  return (
    <Location>
      {({ location, navigate }) => {
        return (
          <StaticQuery
            query={query}
            render={data => {
              return (
                <Navbar sticky="top" bg="dark" variant="dark">
                  <Nav.Link onClick={() => navigate("/")}>
                    <Image src={data.file.childImageSharp.fixed.src} />
                  </Nav.Link>
                  <Nav className="mr-auto">
                    <Nav.Link
                      active={location.pathname === "/FindXYZ"}
                      onClick={() => navigate("/FindXYZ")}
                    >
                      FindXYZ
                    </Nav.Link>
                    <Nav.Link
                      active={location.pathname === "/FindBC"}
                      onClick={() => navigate("/FindBC")}
                    >
                      FindBC
                    </Nav.Link>
                    <Nav.Link
                      active={
                        location.pathname ===
                        "/FindBestDirectionBetweenSCGBangesueAndCentralWorld"
                      }
                      onClick={() =>
                        navigate(
                          "/FindBestDirectionBetweenSCGBangesueAndCentralWorld"
                        )
                      }
                    >
                      FindBestDirectionSCGBangesueAndCentralworld
                    </Nav.Link>
                    <Nav.Link
                      active={location.pathname === "/resume"}
                      onClick={() => navigate("/resume")}
                    >
                      Resume
                    </Nav.Link>
                  </Nav>
                </Navbar>
              )
            }}
          />
        )
      }}
    </Location>
  )
}

export default Header
