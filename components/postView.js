import { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Link } from '../config/routes.js'

@inject('store') @observer
export default class PostView extends Component {
  renderSteps(postId) {
    const { store } = this.props
    const steps = store.getSteps(postId)
    return steps.map((step) => {
      return (
        <div className="card step" key={step.id}>
          <header className="card-header">
            <p className="card-header-title">
              {step.comment}
            </p>
          </header>
          <div className="card-image">
            <figure className="image is-4by3">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
            </figure>
          </div>
        </div>
      )
    })
  }

  renderPost() {
    const { store, id } = this.props
    const post = store.getPost(id)
    if (post) {
      return (
        <div className="post">
          <h2 className="title">
            {post.user}'s Routes
          </h2>
          <div>
            {this.renderSteps(id)}
          </div>
        </div>
      )
    } else {
      return <p>Not Found</p>
    }
  }

  render() {
    return (
      <div>
        {this.renderPost()}
      </div>
    )
  }
}
