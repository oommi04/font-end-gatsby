import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import { Image } from "react-bootstrap"

const query = graphql`
  query {
    site {
      siteMetadata {
        googleMapApiKey
      }
    }
  }
`

const FindXYZPage = props => {
  const { pageContext } = props
  const { data, question } = pageContext
  const polyline = data.routes[0].overview_polyline.points
  return (
    <Layout>
      <StaticQuery
        query={query}
        render={information => {
          const { googleMapApiKey } = information.site.siteMetadata

          return (
            <>
              <p>
                <b>Question: {question}</b>
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src={
                    "https://maps.googleapis.com/maps/api/staticmap?sensor=false&size=500x500&path=weight:10%7Cenc:" +
                    polyline +
                    "&key=" +
                    googleMapApiKey
                  }
                />
              </div>
            </>
          )
        }}
      />
    </Layout>
  )
}
export default FindXYZPage
