
import React from 'react';

import styles from './Quote.css';

class Quote extends React.Component {
  render() {
    return <blockquote className={`quote ${this.props.quote.quote.length < 150 ? '___large' : ''}`}>
      <p>
        {this.props.quote.quote}
        <cite>— {this.props.quote.cite.name} – {this.props.quote.cite.jobTitle} {this.props.quote.cite.company ? ` bij ${this.props.quote.cite.company}` : ''}</cite>
      </p>
    </blockquote>;
  }
}

export default Quote;
