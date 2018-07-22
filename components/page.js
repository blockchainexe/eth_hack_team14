import { Component } from 'react'
import { Provider } from 'mobx-react'
import Header from './header'
import Footer from './footer'

export default class Page extends Component {
  render() {
    const { store } = this.props
    return(
      <Provider store={store}>
        <div>
          <Header store={store} />
          {this.props.children}
          <Footer store={store} />
        </div>
      </Provider>
    )
  }
}
