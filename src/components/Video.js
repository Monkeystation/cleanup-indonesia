import React from "react"
const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className="video image is-16by9">
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
      width="640"
      height="270"
    />
  </div>
)
export default Video