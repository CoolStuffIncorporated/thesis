import React from 'react';
import lifecycle from 'react-pure-lifecycle'

const methods =  {
  componentDidMount(props) {
    console.log('props',props)
    props.setNavFlagToDashboard()
  }
}

const PhotoGrid = (props) => {
  console.log('photogrid', props)
  return (
    <div>
      <h4> Photos </h4>
      {props.photos.map((photo) => {
        return (
            <img src={photo.imageUrl} className="post-image"/>
        )
      })}
    </div>
  )
}

export default lifecycle(methods)(PhotoGrid);

