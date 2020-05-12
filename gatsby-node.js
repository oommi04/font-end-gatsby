const axios = require(`axios`)
require("dotenv").config()

const scgServicePath = process.env.SCG_SERVICE_PATH

exports.createPages = async ({ actions: { createPage } }) => {
  const findXYZ = await axios.get(`${scgServicePath}/doscg/xyz`)

  createPage({
    path: `/FindXYZ`,
    component: require.resolve(`${__dirname}/src/templates/FindValue.js`),
    context: {
      data: findXYZ.data,
      question:
        "X, Y, 5, 9, 15, 23, Z - Please create a new function for finding X, Y, Z value",
    },
  })

  const findBC = await axios.post(`${scgServicePath}/doscg/bc`, {
    ans1: 23,
    ans2: -21,
  })

  createPage({
    path: `/FindBC`,
    component: require.resolve(`${__dirname}/src/templates/FindValue.js`),
    context: {
      data: findBC.data,
      question:
        "If A = 21, A + B = 23, A + C = -21 - Please create a new function for finding B and C value",
    },
  })

  const findBestDirectionBetweenSCGBangesueAndCentralWorldPage = await axios.post(
    `${scgServicePath}/doscg/scgBangsueDirection`,
    {
      start:
        "เซ็นทรัลเวิลด์+999%2F9+ถนน+พระรามที่+๑+แขวง+ปทุมวัน+เขตปทุมวัน+กรุงเทพมหานคร+10330",
    }
  )

  createPage({
    path: `/FindBestDirectionBetweenSCGBangesueAndCentralWorld`,
    component: require.resolve(`${__dirname}/src/templates/googlemap.js`),
    context: {
      data: findBestDirectionBetweenSCGBangesueAndCentralWorldPage.data,
      question:
        "Please use “Google API” for finding the best way to go to Central World from SCG Bangsue",
    },
  })
}
