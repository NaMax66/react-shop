import axios from "axios"
import {Component} from 'react'

export default class extends Component {
  render() {
    const {posts} = this.props
    return <>
      <h1>Books will be here</h1>
      <p>{posts.title}</p>
    </>
  }
}

export async function getStaticProps(context) {
  let { data } = await axios.get("https://jsonplaceholder.typicode.com/posts/2")
  return {
    props: {
      posts: data
    }
  }
}
