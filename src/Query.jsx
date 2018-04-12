import React from 'react';
import PropTypes from 'prop-types';

export default class Query extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        queryId: PropTypes.string.isRequired,
      }),
    }),
  }
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { qId: this.props.match.params.queryId };
  }
  render() {
    return (
      <div>
        <h2>Requested query {this.state.qId}</h2>
        <pre>{window.redoak_queries[this.state.qId].query}</pre>
      </div>
    );
  }
}
