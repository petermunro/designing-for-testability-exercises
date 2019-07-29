import React from 'react'
  import PropTypes from "prop-types"

 const Address = ({ address }) => {
		return ( <div>
		<p>{address.line1}</p>
		<p>{address.town}</p>
      <p>{address.county}</p>
      <p>{address.country}</p>
    </div>
  ) }

   Address.propTypes = {
  address: PropTypes.shape({
	line1: PropTypes.string.isRequired,
	town: PropTypes.string.isRequired,
    county: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired
}).isRequired }

    export default Address
