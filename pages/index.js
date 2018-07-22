import { Component } from 'react'
import { initStore } from '../mobx/store'
import { uport, myContract, myContract2 } from '../utils/uport'
import { readFile } from '../utils/post'
import Page from '../components/page'

var mnid = require('mnid')

var specificNetworkAddress;
var loginSession;

export default class Index extends Component {
  static getInitialProps ({ req }) {
    const isServer = !!req
    const store = initStore(isServer)
    return { isServer }
  }

  constructor (props) {
    super(props)
    this.store = initStore(props.isServer)
  }

  // call() {
  //   myContract2.digitalArts(21, function(error, result) {
  //     console.log(result);
  // }); 

  render() {
    return (
      <Page store={this.store}>
        <section className="hero page">
          <div className="hero-body">
            <div className="container">
              <button className="button is-primary" onClick={this.store.login}>
                Login
              </button>
            </div>
          </div>
        </section>
      </Page>
    )
  }
}
