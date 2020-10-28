import React, {useRef, useEffect, useCallback, useState} from 'react';
import { useInView } from 'react-intersection-observer'

const ScrollAnimation = ({ 
  offset = -150, 
  animationIn = 'fadeIn', 
  animationOut = false, 
  duration = 1, 
  delay = 0,
  animateOnce = false, 
  preVisible = false, 
  style = {}, 
  className = '', 
  children = {}
}) => {
  
  const [classes, setClasses] = useState([])
  const [aniStyle, setAniStyle] = useState({
    animationDuration: `${duration}s`,
    opacity: preVisible ? 1 : 0
  })
  const [didAnimateIn, setDidAnimateIn] = useState(false)
  const [didAnimateOnce, setDidAnimateOnce] = useState(false)

  const [innerViewRef, innerView] = useInView({
    triggerOnce: false,
    rootMargin: offset + `px`,
  })
  const [outerViewRef, outerView] = useInView()

  const ref = useRef();
  const setRefs = useCallback(
    (node) => {
      ref.current = node;
      innerViewRef(node);
      outerViewRef(node);
    }, [],
  );

  useEffect(() => { 
    if (innerView) {
      if (animateOnce && didAnimateOnce) return
      setDidAnimateIn(false)
      setDidAnimateOnce(true) 
      let totalDuration = duration * 1000
      if (delay) {
        totalDuration += delay * 1000
        setTimeout(() => {
          setClasses([`animated`, animationIn])
        }, delay * 1000)
      } else {
        setClasses([`animated`, animationIn])
      }
      setTimeout(() => { setDidAnimateIn(true) }, totalDuration)
    } else if (!innerView && animationOut && didAnimateIn) {
      setDidAnimateIn(false)
      setClasses([`animated`, animationOut])
    }
  }, [innerView]);

  useEffect(() => {
    if (!outerView) {
      if (didAnimateOnce) {
        setClasses([`animated`])
        if (animateOnce) setAniStyle({ opacity: 1 })
        else setAniStyle({
          animationDuration: `${duration}s`,
          opacity: preVisible ? 1 : 0
        })
      } 
    }
  }, [outerView]);

  return (
    <div ref={setRefs} className={[className, classes.join(' ')].filter(Boolean).join(' ')} style={{...aniStyle, ...style}}>
      {children}
    </div>
  )
}

export default ScrollAnimation

// className={`${className} ${classes}`}