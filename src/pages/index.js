import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
//<!-- font-size: calc([minimum size] + ([maximum size] - [minimum size]) * ((100vw - [minimum viewport width]) / ([maximum viewport width] - [minimum viewport width]))) -->
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2 style={{
      margin: `0 auto`,
      marginTop: `10%`,
      width: `75%`,
      maxWidth: `1300px`,
      fontSize: `calc(32px + (64 - 32) * ((100vw - 300px) / (1600 - 300)))`
      }}>
        Professional software development and delivery. We build amazing digital products.
      </h2>
      <div style={{
        margin: `0 auto`,
        marginTop: ``,
        padding: `10% 5%`,
      }}>
        <hr style={{
          color: `white`,
          maxWidth: `500px`,
        }}/>
        <div style={{
          display: `flex`,
          flexFlow: `column`,
          maxWidth: `1300px`,
          fontSize: `20px`,
          lineHeight: `1.6rem`,
        }}>
          <h3 >About Us.</h3>
          <div>
            <p>We are a software development company based in Yorkshire UK. Founded in 2020 we offer decades worth of experience in modern web development to create amazing digital products.</p>
            <p>We love working with clients big and small to help them to visualise their goals and create beautiful digital products.</p>
            <a href="mailto:hello@canisworks.com?subject=Website Message" target="blank">Get in touch: <b>hello@canisworks.com</b></a>
          </div>
        </div>        
      </div>
      <div style={{
        margin: `0 auto`,
        padding: `0 5%`,
      }}>
        <hr style={{
          color: `white`,
          maxWidth: `500px`,
        }}/>
        <div style={{
          display: `flex`,
          flexFlow: `column`,
          maxWidth: `1300px`,
          fontSize: `20px`,
          lineHeight: `1.6rem`,
        }}>
          <h3>What We Do.</h3>
          <div>
            <p>Experienced in the full stack of web application technology we can help with frontend UIs, backend APIs, mobile, video, data storage, service integrations, cloud hosting solutions, Dev-Opts, and everything in between.</p>
            <p>We help get new projects off to a flying start. If your project is already in the midst of development, we can dive in to help with the final push.</p>
            <p>No two projects are ever the same so we don’t buy into one technology or a fixed solution. We strive to select the best technology and solutions to fit your requirements and get your project delivered.</p>
          </div>
        </div>        
      </div>

  </Layout>
)

export default IndexPage
