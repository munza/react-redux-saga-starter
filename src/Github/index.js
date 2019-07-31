import React from 'react';
import { connect } from 'react-redux';

import RepoGrid from './components/RepoGrid';

class Github extends React.Component {
  componentDidMount() {
    this.props.fetchRepos();
  }

  render() {
    return (
      <div>
        <h2>Github Repositories</h2>
        <RepoGrid repos={this.props.repos} loading={this.props.loading} />
      </div>
    );
  }
}

const mapStateToProps = ({ github }) => ({
  repos: github.repos,
  loading: github.loading
});

const mapDispatchToProps = dispatch => ({
  fetchRepos: () => dispatch({ type: 'REPOS/FETCH_REQUEST' })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Github);
