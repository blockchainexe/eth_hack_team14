import { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Link } from '../config/routes.js'

@inject('store') @observer
export default class PostList extends Component {
  renderPosts() {
    const posts = this.props.store.searchedPosts
    if (posts.length != 0) {
      return posts.map((post) => {
        return (
          <Link route="show" params={{ id: post.id }} key={post.id}>
            <a style={{ display: "block", marginBottom: "1.5rem" }}>
              <div className="box">
                <div className="title is-4">
                  <strong>{post.user}</strong>'s Route
                </div>
              </div>
            </a>
          </Link>
        )
      })
    } else {
      return (
        <p>Let's Search! :)</p>
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderPosts()}
      </div>
    )
  }
}
