
import React from 'react';
import { render } from 'react-dom';

import Skills from './Skills.jsx';
import ExperienceWork from './ExperienceWork.jsx';
import Quote from './Quote.jsx';
import Date from './Date.jsx';
import Profile from './Profile.jsx';
import PDFForm from './pdf/PDFForm.jsx';

const CV = require('json-loader!yaml-loader!../../CV.yaml');
console.log(CV);

class App extends React.Component {

  constructor() {
    super();
    /** @todo: this logic should not be here! */

    this.state = {
      scrollTop: getScrollTop()
    }

    function getScrollTop() {
      return window.pageYOffset || document.documentElement.scrollTop
    }

    function headerSlide(scrollTop) {
      return scrollTop > 74
    }

    let header_slide = false;

    window.addEventListener('scroll', (event) => {

      requestAnimationFrame(() => {
        const newScrollTop = getScrollTop();

        this.setState((prevState, props) => {
          return {scrollTop: newScrollTop}
        })

        if (headerSlide(newScrollTop) !== header_slide) {
          document.getElementById('page-header__intro')
                  .setAttribute('class', 'page-header__intro' + (headerSlide(newScrollTop) ? ' __is-slided-up': '') )
          header_slide = headerSlide(newScrollTop);
        }
        //console.log(getScrollTop())
      })
    })
  }

  render () {
    return <div>
      <PDFForm scrollTop={this.state.scrollTop}></PDFForm>
      {/*<Skills skills={CV.skills} />*/}
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
