// Marker.js
import React from 'react';

const Marker = ({ lat, lng, info }) => (
  <div className="marker" lat={lat} lng={lng}>
    <div className="marker-info" dangerouslySetInnerHTML={{ __html: info }} />
  </div>
);

export default Marker;
