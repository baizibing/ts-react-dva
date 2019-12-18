import React, { Component } from 'react'
import { getSingerList } from 'src/api/music';

class Singer extends Component {
  componentDidMount() {
    getSingerList().then(res => {
      console.log(res)
    })
  }

  render() {
    return <div>
      this is singer
    </div>
  }
}
export default Singer;
