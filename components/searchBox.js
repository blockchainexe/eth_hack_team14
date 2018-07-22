import { Component } from 'react'
import { observer, inject } from 'mobx-react'

@inject('store') @observer
export default class SearchBox extends Component {
  render() {
    const { store } = this.props
    const options = store.selectableLine.map((line) => {
      return <option value={line} key={line}>{line}</option>
    })
    return (
      <div className="search-box">
        <h2 className="title">
          Hello, {store.currentUser}!
        </h2>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Station</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <div className="field">
                  <div className="control">
                    <input className="input" type="text" placeholder="ex. Shibuya" value={store.search.station} onChange={store.changeStation} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">From</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <div className="select">
                  <select value={store.search.fromLine} onChange={store.changeFromLine}>
                    <option>Select Line</option>
                    {options}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">To</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <div className="select">
                  <select value={store.search.toLine} onChange={store.changeToLine}>
                    <option>Select Line</option>
                    {options}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
