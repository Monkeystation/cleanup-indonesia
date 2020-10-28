import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Link } from 'react-scroll'
import { Link as PageLink } from 'gatsby'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import ReactGA from 'react-ga'

import { HTMLContent } from '../components/Content'
import LazyParallax from '../components/LazyParallax'
import Layout from '../components/Layout'
import LazyVideo from '../components/LazyVideo'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import ScrollAnimation from '../components/ScrollAnimation'

var md = require('markdown-it')({html: true})
ReactGA.initialize('UA-78821189-6')
ReactGA.pageview('Home')

export const IndexPageTemplate = ({
  intro,
  mission,
  strategy,
  plan,
  results,
  donate
}) => {
  const [parallaxStrength, setParallaxStrength] = useState(250)
  const [parallaxHeight, setParallaxHeight] = useState(500)
  const [windowHeight, setWindowHeight] = useState(0)

  useEffect(() => {
    setWindowHeight(window.innerHeight)
    const onResize = () => {
      if (window.innerWidth > 768) {
        setParallaxStrength(250)
        setParallaxHeight(500)
      } else {
        setParallaxStrength(150)
        setParallaxHeight(300)
      }
    }
    window.addEventListener("resize", onResize, false);
    onResize()
    return () => window.removeEventListener("resize", onResize, false);
  }, [parallaxHeight, parallaxStrength]);

  return (
    <>
      <section className="intro light">
        <section className="header hero is-fullheight" style={{height: windowHeight}}>
          <div className="hero-image">
            <PreviewCompatibleImage imageInfo={{
              image: intro.image_item.image,
              style: {height: '100%'},
              imgStyle: {height: '100%'}
            }} />
          </div>
          <div className="hero-body">
            <div className="container has-text-centered">
              <object className="header-animation" data="/img/header.svg" type="image/svg+xml"></object>
              <Link className="button is-primary is-large is-bold" to="intro" smooth={true} offset={-64}>{intro.button}</Link>
            </div>
          </div>
        </section>
        <section className="content hero section" id="intro">
          <span className="caption is-size-7" dangerouslySetInnerHTML={{__html: md.render(intro.image_item.caption)}}></span>
          <div className="container">
            {intro.heading &&
              <ScrollAnimation animationIn="fadeInUp">
                <h1 className="title is-1 has-text-primary">{intro.heading}</h1>
              </ScrollAnimation>
            }
            <ScrollAnimation animationIn="fadeInUp">
              <div dangerouslySetInnerHTML={{__html: md.render(intro.text)}}></div>
            </ScrollAnimation>
          </div>
        </section>
      </section>
      
      <section className="mission blue">
        <LazyParallax
          image={mission.image_item.image}
          height={parallaxHeight}
          strength={parallaxStrength}>
          <div className="container section">
            {mission.heading &&
              <ScrollAnimation animationIn="fadeInUp">
                <h1 className="title is-1 has-text-primary">{mission.heading}</h1>
              </ScrollAnimation>
            }
          </div>
        </LazyParallax>
        <section className="content hero section">
          <span className="caption is-size-7" dangerouslySetInnerHTML={{__html: md.render(mission.image_item.caption)}}></span>
          <div className="container">
            <ScrollAnimation animationIn="fadeInUp">
              <div className="mb-4" dangerouslySetInnerHTML={{__html: md.render(mission.vision)}}></div>
            </ScrollAnimation>
            <ScrollAnimation animationIn="fadeInUp">
              <div className="mb-4 is-light-list" dangerouslySetInnerHTML={{__html: md.render(mission.mission)}}></div>
            </ScrollAnimation>
            <ScrollAnimation animationIn="fadeInUp">
              <div dangerouslySetInnerHTML={{__html: md.render(mission.values)}}></div>
            </ScrollAnimation>
          </div>
        </section>
      </section>

      <section className="strategy light">
        <LazyParallax
          image={strategy.image_item.image}
          height={parallaxHeight}
          strength={parallaxStrength}>
          <div className="container section has-text-centered">
            {strategy.heading &&
              <ScrollAnimation animationIn="fadeInUp">
                <h1 className="title is-1 has-text-light">{strategy.heading}</h1>
              </ScrollAnimation>
            }
          </div>
        </LazyParallax>
        <section className="content hero section">
          <span className="caption is-size-7" dangerouslySetInnerHTML={{__html: md.render(strategy.image_item.caption)}}></span>
          <div className="container">
            <ScrollAnimation animationIn="fadeInUp">
              <div dangerouslySetInnerHTML={{__html: md.render(strategy.text)}}></div>
            </ScrollAnimation>
            <ul className="is-light-list">
              {strategy.items.map((item, index) => (
                <ScrollAnimation key={`item` + index} animationIn="fadeInUp">
                  <li>
                    <div dangerouslySetInnerHTML={{__html: md.render(item.item)}}></div>
                  </li>
                </ScrollAnimation>
              ))}
            </ul>
          </div>
        </section>
      </section>

      <section className="plan blue">
        <LazyParallax
          image={plan.image_item.image}
          height={parallaxHeight}
          strength={parallaxStrength}>
        <div className="container section">
          {plan.heading &&
              <ScrollAnimation animationIn="fadeInUp">
                <h1 className="title is-1 has-text-light">{plan.heading}</h1>
              </ScrollAnimation>
            }
        </div>
        </LazyParallax>
        <section className="content hero section">
          <span className="caption is-size-7" dangerouslySetInnerHTML={{__html: md.render(plan.image_item.caption)}}></span>
          <div className="container">
            <ScrollAnimation animationIn="fadeInUp">
              <div dangerouslySetInnerHTML={{__html: md.render(plan.text)}}></div>
            </ScrollAnimation>
            <ul className="is-light-list">
              {plan.items.map((item, index) => (
                <ScrollAnimation key={`item` + index} animationIn="fadeInUp">
                  <li>
                    <div dangerouslySetInnerHTML={{__html: md.render(item.item)}}></div>
                  </li>
                </ScrollAnimation>
              ))}
            </ul>
          </div>
        </section>
      </section>

      <section className="results light">
        <LazyParallax
          image={results.image_item.image}
          height={parallaxHeight}
          strength={parallaxStrength}>
          <div className="container section">
            {results.heading &&
              <ScrollAnimation animationIn="fadeInUp">
                <h1 className="title is-1 has-text-light has-text-centered">{results.heading}</h1>
              </ScrollAnimation>
            }
          </div>
        </LazyParallax>
        <section className="content hero section">
          <span className="caption is-size-7" dangerouslySetInnerHTML={{__html: md.render(results.image_item.caption)}}></span>
          <div className="container">
            <ScrollAnimation animationIn="fadeInUp">
              <div className="mb-4" dangerouslySetInnerHTML={{__html: md.render(results.text)}}></div>
            </ScrollAnimation>
            <ul className="is-primary-list">
              {results.items.map((item, index) => (
                <ScrollAnimation key={`item` + index} animationIn="fadeInUp">
                  <li>
                    <div dangerouslySetInnerHTML={{__html: md.render(item.item)}}></div>
                    {item.youtube && <LazyVideo className="mt-3" videoSrcURL={item.youtube} />}
                    {item.image_item &&
                      <PreviewCompatibleImage className="mt-3" imageInfo={{
                        image: item.image_item.image,
                        alt: item.image_item.alt
                      }} />
                    }
                  </li>
                </ScrollAnimation>
              ))}
            </ul>
          </div>
        </section>
      </section>

      <section className="donate blue">
        <LazyParallax
          image={donate.image_item.image}
          height={parallaxHeight}
          strength={parallaxStrength}>
          <div className="container section">
            {donate.heading &&
              <ScrollAnimation animationIn="fadeInUp">
                <h1 className="title is-1 has-text-light has-text-centered">{donate.heading}</h1>
              </ScrollAnimation>
            }
          </div>        
        </LazyParallax>
        <section className="content hero section">
          <span className="caption is-size-7" dangerouslySetInnerHTML={{__html: md.render(donate.image_item.caption)}}></span>
          <div className="container has-text-centered">
            <ScrollAnimation animationIn="fadeInUp">
              <div dangerouslySetInnerHTML={{__html: md.render(donate.text)}}></div>
            </ScrollAnimation>
            <PageLink className="button is-primary is-light is-large is-bold" to="/support">Donate</PageLink>
            <div className="donate-share pt-5">
              <a href="https://www.facebook.com/sharer?u=https://membersihkanindonesia.org" target="_blank" rel="noreferrer">
                <FaFacebookF size={60} style={{backgroundColor:'#3b5998', color:'white', padding:'10px'}} />
              </a>
              <a href="http://twitter.com/intent/tweet?text=Membersihkan%20Indonesia!&hashtags=membersihkanindonesia,cleanupindonesia&url=https://membersihkanindonesia.org" target="_blank" rel="noreferrer">
                <FaTwitter size={60} style={{backgroundColor:'#1da1f2', color:'white', padding:'10px'}} />
              </a>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

IndexPageTemplate.propTypes = {
  intro: PropTypes.object,
  mission: PropTypes.object,
  strategy: PropTypes.object,
  plan: PropTypes.object,
  results: PropTypes.object,
  donate: PropTypes.object
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        intro={frontmatter.intro}
        mission={frontmatter.mission}
        strategy={frontmatter.strategy}
        plan={frontmatter.plan}
        results={frontmatter.results}
        donate={frontmatter.donate}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        intro {
          heading
          text
          button
          image_item {
            image {
              childImageSharp {
                fluid(maxWidth: 1920, quality: 60) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            caption
          }
        }
        mission {
          heading
          vision
          mission
          values
          image_item {
            caption
            image {
              childImageSharp {
                fluid(maxWidth: 1920, quality: 60) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
        strategy {
          heading
          text
          image_item {
            caption
            image {
              childImageSharp {
                fluid(maxWidth: 1920, quality: 60) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          items {
            item
          }
        }
        plan {
          heading
          text
          image_item {
            caption
            image {
              childImageSharp {
                fluid(maxWidth: 1920, quality: 60) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          items {
            item
          }
        }
        results {
          heading
          text
          image_item {
            caption
            image {
              childImageSharp {
                fluid(maxWidth: 1920, quality: 60) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          items {
            item
            youtube
            image_item {
              alt
              image {
                childImageSharp {
                  fluid(maxWidth: 1920, quality: 60) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
        donate {
          heading
          text
          image_item {
            caption
            image {
              childImageSharp {
                fluid(maxWidth: 1920, quality: 60) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
