import { Component } from 'react'
import { Link } from '../config/routes.js'

export default class Header extends Component {
  render() {
    const { store } = this.props
    return(
      <div className="header">
        <nav className="level">
          <p className="level-item has-text-centered">
            <Link route="/">
              <a className="title is-4 logo">
                okonomi
              </a>
            </Link>
          </p>
        </nav>
      </div>
    )
  }
}
