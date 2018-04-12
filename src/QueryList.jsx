import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';


function queryAsTableRow(query) {
  return (
    <tr>
      <td><Link to={`/query/${query.id}`}>{query.name}</Link></td>
      <td>{query.user.name}</td>
      <td>{moment(query.created_at).format('YYYY-MM-DD HH:mm')}</td>
    </tr>
  );
}

export default class QueryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { queryList: null };
    this.fetchQueryList = () => {
      if (!this.state.queryList) {
        return window.fetch('/api/queries?page=1&page_size=20', {
          credentials: 'include',
          mode: 'cors',
        }).catch(err => this.setState({ queryList: [{ name: 'ERR', createdBy: `${err}`, createdAt: ':-(' }] }))
          .then(res => res && res.json())
          .then(list => list && this.setState({ queryList: list.results }) || list.results);
      }
      return Promise.resolve(this.state.queryList);
    };
  }
  componentDidMount() {
    this.fetchQueryList().then(
      queries => (
        queries.forEach((q) => { window.redoak_queries[q.id] = q; })));
  }
  render() {
    const queries = this.state.queryList && React.createElement('tbody', null, ...this.state.queryList.map(queryAsTableRow));
    return (
      <div className="App">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Created By</th>
              <th>Created At</th>
            </tr>
          </thead>
          {queries}
        </table>
      </div>
    );
  }
}
