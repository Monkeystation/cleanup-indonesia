import React, {useEffect, useRef, useCallback, useState} from 'react'
import { useInView } from 'react-intersection-observer'

const LazyParallax = ({ children, image, height, strength}) => {
  const ref = useRef();
  const tickingRef = useRef()
  const [inViewRef, inView] = useInView({triggerOnce: false})
  const [imgStyle, setImgStyle] = useState({
    position:'absolute',
    left: '50%',
    width: '100%',
    height: (height + strength) + `px`,
    objectFit: 'cover',
    transform: 'translate3d(-50%, 0, 0)',
    WebkitTransformStyle: 'preserve-3d',
    WebkitBackfaceVisibility: 'hidden',
    MozBackfaceVisibility: 'hidden',
    MsBackfaceVisibility: 'hidden',
  })

  const wrapperStyle = {
    overflow:'hidden', 
    position: 'relative', 
    height: height+'px'
  }

  const childrenStyle = {
    position:'absolute',
    width: '100%',
    height: height+`px`,
    zIndex: 1
  }

  const setRefs = useCallback(
    (node) => {
      ref.current = node;
      inViewRef(node);
    },
    [inViewRef],
  );

  useEffect(() => {
    setImgStyle(prevState => ({
      ...prevState, height: (height + strength) + `px`,
    }))
  }, [height, strength])

  useEffect(() => {
    const onScroll = () => {
      // if(!tickingRef.current) {
      //   requestAnimationFrame(animate);
      //   tickingRef.current = true
      // }
    }
    const animate = () => {
      const r = ref.current.getBoundingClientRect()
      const vpHeight = window.innerHeight
      const p = (r.top + r.height) / (vpHeight + r.height)
      const pos = strength * p;
      const transform = `translate3d(-50%, ${-pos}px, 0)`
      setImgStyle(prevState => ({
        ...prevState, WebkitTransform: transform, transform
      }))
    }
    if (inView) {
      window.addEventListener("scroll", animate, false);
    } else {
      window.removeEventListener("scroll", animate, false);
    }
    return () => window.removeEventListener("scroll", animate, false);
  }, [inView, strength]);

  useEffect(() => {
    tickingRef.current = false
  }, [imgStyle]);

  return (
    <div className="parallax" ref={setRefs} style={wrapperStyle}>
      <div className="parallax-content" style={childrenStyle}>{children}</div>
      {image.childImageSharp &&
        <picture>
          <source type="image/webp" srcSet={image.childImageSharp.fluid.srcSetWebp} sizes={image.childImageSharp.fluid.sizes} />
          <source type="image/jpeg" srcSet={image.childImageSharp.fluid.srcSet} sizes={image.childImageSharp.fluid.sizes} />
          <img 
            src={image.childImageSharp.fluid.src}
            srcSet={image.childImageSharp.fluid.srcSet}
            sizes={image.childImageSharp.fluid.sizes}
            loading="lazy"
            alt=""
            style={imgStyle}
          />
        </picture>
      }
      {(typeof image === 'string') &&
        <picture>
        <img 
          src={image}
          loading="lazy"
          alt=""
          style={imgStyle}
        />
      </picture>
    }
    </div>
  )
}
export default LazyParallax

/* <PreviewCompatibleImage imageInfo={{image, imgStyle}} />  */