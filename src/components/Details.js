import React from 'react'

const Details = ({ data }) => (
  <div className="Details" key="details">
  <b>{data.name}</b><br/><br/>
  <b>Type:</b> {data.type}<br/>
  <b>Wealth:</b> {data.wealth}<br/>
  <b>Authority:</b> {data.authority}<br/>
  <b>Guards:</b> {data.numGuards}
  </div>
)

export default Details
