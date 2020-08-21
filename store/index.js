import { useStaticRendering } from 'mobx-react'
import { observable, action } from 'mobx'
import axios from 'axios'

class Store {
  constructor(initData = {}) {
    this.books = initData.books
  }
  @action setBooks(books) {
    this.books = books;
  }
  async fetch() {
    const {data} = await axios.get('https://api.kraken.com/0/public/Ticker?pair=XETHZUSD')
    this.setBooks(data)
  }
}

export default Store
