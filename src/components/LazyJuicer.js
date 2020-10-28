import React, {useEffect} from 'react';
import { useInView } from 'react-intersection-observer'

const LazyJuicer = (props) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin:"500px"
  })

  useEffect(() => {
    if (inView) {
      const script = document.createElement('script')
      script.src = 'https://assets.juicer.io/embed.js'
      script.async = true
      document.body.appendChild(script)

      const link = document.createElement('link')
      link.href = 'https://assets.juicer.io/embed.css'
      link.media = "all"
      link.rel = "stylesheet"
      link.type = "text/css"
      document.body.appendChild(link);
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <ul className="juicer-feed" data-feed-id="membersihkanindonesia" data-per="12">
        <h1 className="referral"><a href="https://www.juicer.io">Powered by Juicer</a></h1>
      </ul>
    </div>
  )
}

export default LazyJuicer