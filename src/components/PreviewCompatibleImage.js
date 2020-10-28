import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const PreviewCompatibleImage = React.forwardRef(({ imageInfo, className = '' }, ref) => {
  const { alt = '', image, style, imgStyle } = imageInfo

  if (image) {
    if (image.childImageSharp) {
    return <Img style={style} imgStyle={imgStyle} fluid={image.childImageSharp.fluid} alt={alt} />
  } else if (typeof image === 'string')
    return <img style={imgStyle} src={image} alt={alt} />
  } else return null
})

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
    imgStyle: PropTypes.object,
  }).isRequired,
}

export default PreviewCompatibleImage
