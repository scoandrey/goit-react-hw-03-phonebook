import React from 'react';
import './Filter.css'

class Filter extends React.Component {
  render() {
    const { onChange } = this.props;
    return <input className='inputFilter' onChange={e => onChange(e.target.value)} />;
  }
}

export default Filter;
