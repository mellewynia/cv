
import React from 'react';
import {render} from 'react-dom';

import ExperienceWork from './ExperienceWork.jsx';
import Quote from './Quote.jsx';
import Date from './Date.jsx';

const CV = require('json-loader!yaml-loader!../../CV.yaml');
console.log(CV);

class App extends React.Component {
  render () {
    return <div>
      {CV.experiences.map((experience, i) => {
        if (experience.type === 'work') {
          return <ExperienceWork experience={experience} key={i} />
        } else if (experience.type === 'quote') {
          return <Quote quote={experience} key={i} />
        } else if (experience.type === 'date') {
          return <Date date={experience} key={i}/>
        }
      })}
    </div>;
  }
}

render(<App/>, document.getElementById('app'));
