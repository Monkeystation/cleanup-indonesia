import React from 'react'
import { FaRegEnvelope } from 'react-icons/fa';

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter is-size-6 has-text-centered">
        <p>Copyright © 2020&nbsp;
          <a href="https://monkeystation.nl/" target="_blank" rel="noreferrer" className="has-text-white-ter">Monkey Station</a>&nbsp;
          <FaRegEnvelope style={{position:'relative', top:'3px'}} />&nbsp;
          <a href="mailto:info@membersihkanindonesia.org" className="has-text-white-ter">info@membersihkanindonesia.org</a>
        </p>
      </footer>
    )
  }
}

export default Footer
