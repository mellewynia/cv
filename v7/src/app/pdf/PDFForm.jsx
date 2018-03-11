
import React from 'react';
import { render } from 'react-dom';

import $script from 'scriptjs';

import styles from './PDFForm.css';

const CV = require('json-loader!yaml-loader!../../../CV.yaml');
import generatePDF from './generatePDF.js';

class PDFForm extends React.Component {

    constructor () {
      super()

      this.state = {
        loading: false,
        dependenciesLoaded: false
      };
    }

    generatePDF () {

      if (!this.state.loading) {

        this.setState({ loading: true })

        if (this.state.dependenciesLoaded) {
          setTimeout(() => {
            generatePDF(CV)
            this.setState({ loading: false })
          }, 162)
        } else {

          setTimeout(() => {
            $script('/assets/fonts/js/pdfmake.min.js', () => {
              $script('/assets/fonts/js/vfs_fonts.js', () => {
                this.setState({ dependenciesLoaded: true })
                setTimeout(() => {
                  generatePDF(CV)
                  this.setState({ loading: false })
                }, 100)
              })
            })
          }, 162);
        }

      }
    }

    show() {
      return this.props.scrollTop > 74
    }

    render () {
        return <div
          className={'pdf-form' + (this.show() ? ' ___is-shown' : '') }
        >
            <button
              onClick={this.generatePDF.bind(this)}
              className={ this.state.loading ? '___is-loading' : '' }
              title="Genereer PDF-versie van mijn CV!"
            >
                <i className="icon-download"></i>
                CV
            </button>
            <small>
              { this.state.loading ?
                ( this.state.dependenciesLoaded ? 'PDF Live genereren...' : 'PDF libraries inladen' )
                : 'ALPHA: Genereer PDF Live '
              }
            </small>
        </div>
    }

}

export default PDFForm;
