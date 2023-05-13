import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
    <p>I'm making this by following the Gatsby Tutorial.</p>
    <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/Nishinegi_series_tracking_website_ui_ux_uiux_minimalistic_moder_41a64654-ab96-466a-ba95-bc69d08b0973.png"
      />
  </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage