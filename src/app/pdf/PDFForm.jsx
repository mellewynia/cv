
import React from 'react';
import { render } from 'react-dom';

import $script from 'scriptjs';

import styles from './PDFForm.css';

const NPM_PACKAGE = require('json-loader!../../../package.json')
const CV = require('json-loader!yaml-loader!../../../CV.yaml');
import generateAndStreamPDF from './generatePDF.js';

class PDFForm extends React.Component {

    constructor () {
      super()

      this.state = {
        loading: false,
        dependenciesLoaded: false
      };
    }

    getFileBase64(url) {
        return fetch(url)
            .then(response => response.blob())
            .then(blob => new Promise((resolve, reject) => {
                const reader = new FileReader()
                reader.onloadend = () => resolve(reader.result.replace(/^.+;base64,/, ''))
                reader.onerror = reject
                reader.readAsDataURL(blob)
            }))
    }

    generatePDF () {

      if (!this.state.loading) {

        this.setState({ loading: true })

        if (this.state.dependenciesLoaded) {
          setTimeout(() => {
            generateAndStreamPDF(NPM_PACKAGE, CV)
            this.setState({ loading: false })
          }, 162)
        } else {

          setTimeout(() => {
            $script('/assets/fonts/js/pdfmake.min.js', () => {
                Promise.all([
                    this.getFileBase64('/assets/fonts/open-sans/subset-open-sans.ttf'),
                    this.getFileBase64('/assets/fonts/open-sans/subset-open-sans-light.ttf'),
                    this.getFileBase64('/assets/fonts/raleway/subset-raleway-italic.ttf'),
                    this.getFileBase64('/assets/fonts/raleway/subset-raleway-light-italic.ttf')
                ]).then(results => {
                    console.log(results)

                    window.pdfMake.fonts = {
                      'Roboto': {
                          normal: 'SubsetOpenSans.ttf',
                          bold: 'SubsetOpenSans.ttf',
                          italics: 'SubsetOpenSans.ttf',
                          bolditalics: 'SubsetOpenSans.ttf'
                      },
                      'Open Sans': {
                          normal: 'SubsetOpenSans.ttf',
                      },
                      'Open Sans Light': {
                          normal: 'SubsetOpenSansLight.ttf',
                      },
                      'Raleway': {
                          normal: 'SubsetRaleway.ttf',
                      },
                      'Raleway Light': {
                          normal: 'SubsetRalewayLight.ttf',
                      }
                    }

                    window.pdfMake.vfs = {
                      'SubsetOpenSans.ttf': results[0],
                      'SubsetOpenSansLight.ttf': results[1],
                      'SubsetRaleway.ttf': results[2],
                      'SubsetRalewayLight.ttf': results[3]
                    }

                    console.log(window.pdfMake.vfs)

                    this.setState({ dependenciesLoaded: true })
                    setTimeout(() => {
                      generateAndStreamPDF(NPM_PACKAGE, CV)
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
                <span className="icon-holder">
                    { this.state.loading ?
                        <span className="indication ___is-loading"></span>
                        : <i className="icon-download"></i>
                    }
                </span>
                CV
            </button>
            <small>
              { this.state.loading ?
                ( this.state.dependenciesLoaded ? 'PDF Live genereren...' : 'PDF libraries inladen' )
                : 'Genereer PDF-versie LIVE'
              }
            </small>
        </div>
    }

}

export default PDFForm;
