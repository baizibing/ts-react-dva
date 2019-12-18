import React, { Component } from 'react';
import { connect } from 'dva';
import Layout from 'src/components/layout';

/* eslint react/prop-types: 0 */
@connect((store) => {
  return store.home
})
class Home extends Component {
  render() {
    return <Layout>
      this is Home page 
    </Layout>
  }
}
export default Home;
