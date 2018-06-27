import React from 'react';
import lifecycle from 'react-pure-lifecycle'

const methods =  {
  componentDidMount(props) {
    console.log('props',props)
    props.setNavFlagToDashboard()
  }
}


const Destinations = function () {
  return (
    <div>
      <ul>
        places I've been
        <li>Iceland</li>
        <li>Panama</li>
      </ul>
      <ul>
        places I want to visit
        <li>Hong Kong</li>
        <li>Tokyo</li>
      </ul>
    </div>
  )
}

export default Destinations;
