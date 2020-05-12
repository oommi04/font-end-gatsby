import React from "react"

import Layout from "../components/layout"

const FindValuePage = props => {
  const { pageContext } = props
  const { data, question } = pageContext
  return (
    <Layout>
      <p>
        <b>Question: {question}</b>
      </p>
      {Object.keys(data).map(key => (
        <p>
          {key}: {data[key]}
        </p>
      ))}
    </Layout>
  )
}
export default FindValuePage
