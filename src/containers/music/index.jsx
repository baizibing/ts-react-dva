import React, { Component } from 'react'
import Layout from 'src/components/layout';
import RouterView from 'src/router';
import PropTypes from 'prop-types';

class Music extends Component {
  render() {
    const { routes, history } = this.props;
    return <Layout>
      this is music
      <RouterView routes={routes} history={history}></RouterView>
    </Layout>
  }
}
Music.propTypes = {
  routes: PropTypes.array,
  history: PropTypes.object
}
export default Music
