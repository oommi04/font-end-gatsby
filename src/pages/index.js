import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Carousel, Image } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const query = graphql`
  query Myquery {
    allImageSharp {
      edges {
        node {
          fixed(height: 400, width: 600) {
            originalName
            src
          }
        }
      }
    }
  }
`

const IndexPage = props => {
  const getPropsFileWithFileName = (edges, fileName) => {
    return edges.find(edge => edge.node.fixed.originalName === fileName)
  }
  return (
    <Layout>
      <StaticQuery
        query={query}
        render={data => {
          return (
            <>
              <SEO title="Home" />
              <Carousel style={{ background: "#282C34", textAlign: "center" }}>
                <Carousel.Item>
                  <Image
                    src={
                      getPropsFileWithFileName(
                        data.allImageSharp.edges,
                        "scg1.png"
                      ).node.fixed.src
                    }
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    src={
                      getPropsFileWithFileName(
                        data.allImageSharp.edges,
                        "scg2.jpg"
                      ).node.fixed.src
                    }
                  />
                </Carousel.Item>
              </Carousel>
            </>
          )
        }}
      />
    </Layout>
  )
}
export default IndexPage
