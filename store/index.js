import { useStaticRendering } from 'mobx-react'
import { observable, action } from 'mobx'
import axios from 'axios'

const isServer = typeof window === 'undefined'
useStaticRendering(isServer)

class Store {
  @observable books = 'hi'
  @observable test = false

  constructor(initData = {}) {
    this.books = initData.books
  }

  @action setTest(value) {
    this.test = value
  }

  @action setBooks(books) {
    this.books = books
  }

  async fetch() {
    const {data} = await axios.get('https://api.kraken.com/0/public/Ticker?pair=XETHZUSD')
    this.setBooks(data)
  }
}

export default new Store()
