import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Link } from 'react-scroll'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import ReactGA from 'react-ga'

import LazyParallax from '../components/LazyParallax'
import Layout from '../components/Layout'
import LazyVideo from '../components/LazyVideo'
import LazyJuicer from '../components/LazyJuicer'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import ScrollAnimation from '../components/ScrollAnimation'

var md = require('markdown-it')()
ReactGA.initialize('UA-78821189-5')
ReactGA.pageview('Home')

export const IndexPageTemplate = ({
  intro,
  problem,
  cause,
  solution,
  other,
  social
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
      <section className="intro">
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
              <Link className="button is-primary is-large is-bold" to="intro" smooth={true} offset={-64}>{intro.button}</Link>
            </div>
          </div>
        </section>
        <section className="content hero section" id="intro"
          style={{backgroundImage:`url(${'/img/shells.png'})`}}>
          <span className="caption is-size-7" dangerouslySetInnerHTML={{__html: md.render(intro.image_item.caption)}}></span>
          <div className="container has-text-centered">
            <ScrollAnimation animationIn="fadeInUp">
              <h1 className="title is-1 has-text-primary">{intro.heading}</h1>
            </ScrollAnimation>
            <ScrollAnimation animationIn="fadeInUp">
              <div dangerouslySetInnerHTML={{__html: md.render(intro.text)}}></div>
            </ScrollAnimation>
          </div>
        </section>
      </section>
      
      <section className="problem">
        <LazyParallax
          image={problem.image_item.image}
          height={parallaxHeight}
          strength={parallaxStrength}>
          <section className="container has-text-centered section">
            <ScrollAnimation animationIn="fadeInUp">
              <h1 className="title is-1 has-text-light">{problem.heading}</h1>
            </ScrollAnimation>
          </section>
        </LazyParallax>
        <section className="content hero section"
          style={{backgroundImage:`url(${'/img/fish.png'})`}}>
          <span className="caption is-size-7" dangerouslySetInnerHTML={{__html: md.render(problem.image_item.caption)}}></span>
          <div className="container has-text-centered">
            <ScrollAnimation animationIn="fadeInUp">
              <div dangerouslySetInnerHTML={{__html: md.render(problem.text)}}></div>
            </ScrollAnimation>
          </div>
        </section>
      </section>

      <section className="cause">
        <LazyParallax
          image={cause.image_item.image}
          height={parallaxHeight}
          strength={parallaxStrength}>
          <div className="container has-text-centered section">
            <ScrollAnimation animationIn="fadeInUp">
              <h1 className="title is-1 has-text-light">{cause.heading}</h1>
            </ScrollAnimation>
          </div>
        </LazyParallax>
        <section className="content hero section"
          style={{backgroundImage:`url(${'/img/shells.png'})`}}>
          <span className="caption is-size-7" dangerouslySetInnerHTML={{__html: md.render(cause.image_item.caption)}}></span>
          <div className="container has-text-centered">
            <ScrollAnimation animationIn="fadeInUp">
              <div className="pb-5" dangerouslySetInnerHTML={{__html: md.render(cause.text)}}></div>
            </ScrollAnimation>
            <LazyVideo videoSrcURL={cause.video_item.video} videoTitle={cause.video_item.title} />
          </div>
        </section>
      </section>

      <section className="solution">
        <LazyParallax
          image={solution.image_item.image}
          height={parallaxHeight}
          strength={parallaxStrength}>
        <div className="container has-text-centered section">
          <ScrollAnimation animationIn="fadeInUp">
            <h1 className="title is-1 has-text-light">{solution.heading}</h1>
          </ScrollAnimation>
        </div>
        </LazyParallax>
        <section className="content hero section"
          style={{backgroundImage:`url(${'/img/fish.png'})`}}>
          <span className="caption is-size-7" dangerouslySetInnerHTML={{__html: md.render(solution.image_item.caption)}}></span>
          <div className="container">
            <ScrollAnimation animationIn="fadeInUp">
              <h1 className="is-size-1 has-text-light">{solution.we.caption}</h1>
            </ScrollAnimation>
            <ul className="is-light-list">
              {solution.we.items.map((item, index) => (
                <ScrollAnimation key={`item` + index} animationIn="fadeInUp">
                  <li>
                    <div dangerouslySetInnerHTML={{__html: md.render(item.item)}}></div>
                  </li>
                </ScrollAnimation>
              ))}
            </ul>
          </div>
        </section>
        <section className="content hero section"
          style={{backgroundImage:`url(${'/img/shells.png'})`}}>
          <div className="container">
            <ScrollAnimation animationIn="fadeInUp">
              <h1 className="is-size-1 has-text-primary">{solution.community.caption}</h1>
            </ScrollAnimation>
            <ScrollAnimation animationIn="fadeInUp">
              <p>{solution.community.text}</p>
            </ScrollAnimation>
            <ul className="is-primary-list">
              {solution.community.items.map((item, index) => (
                <ScrollAnimation key={`item` + index} animationIn="fadeInUp">
                  <li>
                    <div dangerouslySetInnerHTML={{__html: md.render(item.item)}}></div>
                  </li>
                </ScrollAnimation>
              ))}
            </ul>
          </div>
        </section>
        <section className="content hero section"
          style={{backgroundImage:`url(${'/img/fish.png'})`}}>
          <div className="container">
            <ScrollAnimation animationIn="fadeInUp">
              <h1 className="is-size-1 has-text-light">{solution.government.caption}</h1>
            </ScrollAnimation>
            <ScrollAnimation animationIn="fadeInUp">
              <p>{solution.government.text}</p>
            </ScrollAnimation>
            <ul className="is-light-list">
              {solution.government.items.map((item, index) => (
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

      <section className="other">
        <LazyParallax
          image={other.image_item.image}
          height={parallaxHeight}
          strength={parallaxStrength}>
          <div className="container has-text-centered section">
            <ScrollAnimation animationIn="fadeInUp">
              <h1 className="title is-1 has-text-light">{other.heading}</h1>
            </ScrollAnimation>
          </div>
        </LazyParallax>
        <section className="content hero section"
          style={{backgroundImage:`url(${'/img/shells.png'})`}}>
          <span className="caption is-size-7" dangerouslySetInnerHTML={{__html: md.render(other.image_item.caption)}}></span>
          <div className="container">
            <ScrollAnimation animationIn="fadeInUp">
              <p>{other.text}</p>
            </ScrollAnimation>
            <ul className="is-primary-list">
              {other.items.map((item, index) => (
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

      <section className="social">
        <LazyParallax
          image={social.image_item.image}
          height={parallaxHeight}
          strength={parallaxStrength}>
          <div className="container has-text-centered section">
            <ScrollAnimation animationIn="fadeInUp">
              <h1 className="title is-1 has-text-light">{social.heading}</h1>
            </ScrollAnimation>
          </div>        
        </LazyParallax>
        <section className="content hero section"
          style={{backgroundImage:`url(${'/img/fish.png'})`}}>
          <span className="caption is-size-7" dangerouslySetInnerHTML={{__html: md.render(social.image_item.caption)}}></span>
          <div className="container has-text-centered">
            <ScrollAnimation animationIn="fadeInUp">
              <div dangerouslySetInnerHTML={{__html: md.render(social.text)}}></div>
            </ScrollAnimation>
            <div className="social-share pt-5">
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

      <section className="juicer">
        <section className="content hero section"
          style={{backgroundImage:`url(${'/img/shells.png'})`}}>
          <div>
          <h1 className="title is-2 has-text-primary has-text-centered">#membersihkanindonesia</h1>
          <LazyJuicer />
          </div>
        </section>
      </section>
    </>
  )
}

IndexPageTemplate.propTypes = {
  intro: PropTypes.object,
  problem: PropTypes.object,
  cause: PropTypes.object,
  solution: PropTypes.object,
  other: PropTypes.object,
  social: PropTypes.object
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        intro={frontmatter.intro}
        problem={frontmatter.problem}
        cause={frontmatter.cause}
        solution={frontmatter.solution}
        other={frontmatter.other}
        social={frontmatter.social}
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
        problem {
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
        cause {
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
          video_item {
            video 
            caption
          }
        }
        solution {
          heading
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
          we {
            caption
            text
            items {
              item
            }
          }
          community {
            caption
            text
            items {
              item
            }
          }
          government {
            caption
            text
            items {
              item
            }
          }
        }
        other {
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
        social {
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
