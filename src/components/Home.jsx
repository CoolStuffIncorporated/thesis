import React from "react";
import Stats from "./Stats.jsx"
import lifecycle from 'react-pure-lifecycle'

const methods =  {
  componentDidMount(props) {
    console.log('props',props)
    props.setNavFlagToDashboard()
  }
}

const Home = (props) => {
    return (
    <div>
      <Stats/>
      <h5>Your Friends' Popular/Recent blogs</h5>
      <h5>Your Friends' Popular/Recent photos</h5>
    </div>
  )
};

export default lifecycle(methods)(Home);
