
import React from 'react';

import styles from './Date.css';

class Date extends React.Component {
  render() {
    return <div className="date">

      <h2><span>{this.props.date.date} —  {this.props.date.name}</span></h2>
    </div>
  }
}

export default Date;
