import { Component } from 'react'
import { initStore } from '../mobx/store'
import Page from '../components/page'
import SearchBox from '../components/searchBox'
import PostList from '../components/postList'

export default class Search extends Component {
  static getInitialProps ({ req }) {
    const isServer = !!req
    const store = initStore(isServer)
    return { isServer }
  }

  constructor (props) {
    super(props)
    this.store = initStore(props.isServer)
  }

  render() {
    return (
      <Page store={this.store}>
        <section className="hero page">
          <div className="hero-body">
            <div className="container">
              <SearchBox store={this.store} />
              <PostList store={this.store} />
            </div>
          </div>
        </section>
      </Page>
    )
  }
}
