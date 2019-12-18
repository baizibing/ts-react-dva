import React, { Component } from 'react'
import 'src/assets/css/bootstrap.min.css';
import 'src/assets/css/iconfont.css';
import 'src/assets/css/reset.css';
import 'src/assets/css/common.css';
import 'src/assets/css/style.css';

/* eslint react/prop-types: 0 */
class Layout extends Component {
  render() {
    return (
      <div className='wraper'>
        <header className='header'>12313</header>
        <section>{this.props.children}</section>
      </div>
    )
  }
}
export default Layout;
