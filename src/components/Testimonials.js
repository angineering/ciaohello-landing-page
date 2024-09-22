import React from 'react'
import PropTypes from 'prop-types'

const Testimonial = ({ quote, name, job, photo }) => (
    <div className="testimonial">
      <q className="quote">{quote}</q>
      <div className="by">
        <img src={photo} alt={name} />
        <cite>
          {name}
          <br />
          <strong>{job}</strong>
        </cite>
      </div>
    </div>
)


Testimonial.propTypes = {

}

export default Testimonial