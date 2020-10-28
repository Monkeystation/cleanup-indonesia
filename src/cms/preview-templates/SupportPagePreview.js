import React from 'react'
import PropTypes from 'prop-types'
import { SupportPageTemplate } from '../../templates/support-page'

const SupportPagePreview = ({ entry, widgetFor }) => (
  <SupportPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
    button_donate={entry.getIn(['data', 'button_donate'])}
  />
)

SupportPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default SupportPagePreview
