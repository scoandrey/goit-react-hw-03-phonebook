import React from 'react';

class Filter extends React.Component {
  render() {
    const { onChange } = this.props;
    return <input onChange={e => onChange(e.target.value)}></input>;
  }
}

export default Filter;
