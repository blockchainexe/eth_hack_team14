import { observable, action } from 'mobx'
import { Router } from '../config/routes'
import { uport, myContract2 } from '../utils/uport'

let store = null

class Store {
  @observable currentUser
  @observable search
  @observable selectableLine
  @observable posts
  @observable searchedPosts

  constructor(isServer) {
    this.currentUser = 'unknown'
    this.search = {
      station: undefined,
      fromLine: undefined,
      toLine: undefined
    }
    this.selectableLine = []
    this.posts = [
      { id: 1, user: 'Nagai', like: 10, unlike: 1 },
      { id: 2, user: 'Yuka', like: 7, unlike: 1 },
      { id: 3, user: 'Miki', like: 3, unlike: 1 },
      { id: 4, user: 'Oki', like: 1, unlike: 2 }
    ]
    this.searchedPosts = []
  }

  @action.bound
  login() {
    uport.requestCredentials({
      requested: ['name'],
      notification: true
    })
    .then(credential => {
      console.log(credential)
      this.currentUser = credential.name
      Router.pushRoute('search')
    })
  }

  @action.bound
  changeStation(e) {
    if (e.target.value == 'Shibuya') {
      this.search.station = e.target.value
      this.selectableLine = [
        "JR Yamanote",
        "JR Saikyo",
        "JR Shonan Shinjuku",
        "Metro Ginza",
        "Metro Hanzomon",
        "Metro Fukutoshin",
        "Keio Inokashira",
        "Tokyu Toyoko",
        "Tokyu Denentoshi"
      ]
      this.checkSeachInputCompleted()
    }
  }

  @action.bound
  changeFromLine(e) {
    this.search.fromLine = e.target.value
    this.checkSeachInputCompleted()
  }

  @action.bound
  changeToLine(e) {
    this.search.toLine = e.target.value
    this.checkSeachInputCompleted()
  }

  @action.bound
  checkSeachInputCompleted() {
    if (this.search.station == 'Shibuya'
      && this.search.fromLine == 'JR Yamanote'
      && this.search.toLine == 'Keio Inokashira') {
      myContract2.searchPostIds(
        // this.search.station,
        // this.search.fromLine,
        // this.search.toLine,
        "溜池山王", "銀座線", "南北線",
        (err, result) => {
          if (err) {
            console.log('err', err)
            return
          }
          console.log('posts', result)

          let postIds = result.map((postId) => postId.c[0])
          console.log('postIds', postIds)

          postIds.map((postId) => {
            console.log('postId', postId)

            let post = myContract2.getPost(0, (err, result) => {
              if (err) {
                console.log('err', err)
                return
              }

              console.log('post', result)
              this.searchedPosts.push({
                id: result[0].c[0],
                user: `User ${result[0].c[0]}`,
                like: result[1].c[0],
                unlike: result[2].c[0]
              })
              console.log(this.searchedPosts)
            })
          })
        }
      )
    }
  }

  @action.bound
  getPost(postId) {
    return this.posts.find((post) => post.id == postId)
  }

  @action.bound
  getSteps(postId) {
    return [
      { id: 1, comment: 'Go straight this way until you get to the ticket gate.' },
      { id: 2, comment: 'Go straight.' },
      { id: 3, comment: 'Go past the convenience store and turn left.' },
      { id: 4, comment: 'Turn right at the ticket-vending machine' },
      { id: 5, comment: 'Turn left.' }
    ]
  }
}

export function initStore (isServer) {
  console.log('store: ', store)
  if (store === null) {
    store = new Store(isServer)
  }
  return store
}
