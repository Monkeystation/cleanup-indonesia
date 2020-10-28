import React from 'react';
import { InView } from 'react-intersection-observer';

const LazyVideo = ({ videoSrcURL, videoTitle, width, height, ...props }) => {

  return (
    <InView triggerOnce={true} rootMargin="500px">
    {({ inView, ref, entry }) => {
      return (inView) ? (
        <div ref={ref} className="video image is-16by9">
          <iframe
            src={videoSrcURL}
            loading="lazy"
            className="has-ratio"
            title={videoTitle}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
            width={width}
            height={height}
          />
        </div>
      ) : (<div ref={ref} className="video image is-16by9" style={{width, height}}></div>)
    }}
    </InView>
  )
}

export default LazyVideo