import { Component } from 'react'
import { Link } from '../config/routes.js'

export default class Footer extends Component {
  render() {
    const { store } = this.props
    return(
      <footer className="footer">
        <div className="columns is-mobile">
          <div className="column">
            <span className="icon">
              <Link route="search">
                <a>
                  <span className="icon has-text-primary">
                    <i className="fa fa-search fa-2x"></i>
                  </span>
                </a>
              </Link>
            </span>
          </div>
          <div className="column">
            <Link route="post">
              <a>
                <span className="icon has-text-primary">
                  <i className="fa fa-plus fa-2x"></i>
                </span>
              </a>
            </Link>
          </div>
        </div>
      </footer>
    )
  }
}
