import React from 'react';
import { InView } from 'react-intersection-observer';

const LazyComponent = ({ children, ...props }) => {

  return (
    <InView triggerOnce={true} rootMargin="500px">
    {({ inView, ref, entry }) => {
      return (inView) ? (
        <div ref={ref}>
          {children}
        </div>
      ) : (<div ref={ref}></div>)
    }}
    </InView>
  )
}

export default LazyComponent