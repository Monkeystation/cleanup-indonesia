import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import ScrollAnimation from '../components/ScrollAnimation'


export const SupportPageTemplate = ({ title, content, button_donate, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="content hero section"
      style={{backgroundImage:`url(${'/img/shells.png'})`}}>
    <div className="container has-text-centered mt-3">
      <ScrollAnimation animationIn="fadeInUp" offset={0}>
        <h1 className="title is-1 has-text-primary mt-3">{title}</h1>
      </ScrollAnimation>
      <ScrollAnimation animationIn="fadeInUp" delay={.2}>
        <PageContent className="content" content={content} />
        <PageContent className="button-donate mt-3" content={button_donate} />
      </ScrollAnimation>
    </div>
  </section>
  )
}

SupportPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const SupportPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SupportPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        button_donate={post.frontmatter.button_donate}
      />
    </Layout>
  )
}

SupportPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default SupportPage

export const supportPageQuery = graphql`
  query SupportPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        button_donate
      }
    }
  }
`
