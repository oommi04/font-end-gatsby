import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Image } from "react-bootstrap"

import Layout from "../components/layout"

const query = graphql`
  query {
    file(relativePath: { eq: "myresume.png" }) {
      childImageSharp {
        fixed(width: 400, height: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const ResumePage = props => {
  return (
    <Layout>
      <StaticQuery
        query={query}
        render={data => {
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image src={data.file.childImageSharp.fixed.src} />
            </div>
          )
        }}
      />
    </Layout>
  )
}
export default ResumePage
