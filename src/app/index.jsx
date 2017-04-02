
import React from 'react';
import {render} from 'react-dom';

import ExperienceWork from './ExperienceWork.jsx';
import Quote from './Quote.jsx';
import Date from './Date.jsx';
import Profile from './Profile.jsx';

const CV = require('json-loader!yaml-loader!../../CV.yaml');
console.log(CV);

class App extends React.Component {
  render () {
    return <div>
      {CV.experiences.map((experience, i) => {
        switch(experience.type) {
          case 'work':
            return <ExperienceWork experience={experience} key={i} />;
          case 'quote':
            return <Quote quote={experience} key={i} />;
          case 'date':
            return <Date date={experience} key={i} />;
          case 'profile':
            return <Profile profile={experience} key={i} />;
        }
      })}
    </div>;
  }
}

render(<App/>, document.getElementById('app'));
