import axios from "axios"
import {Component} from 'react'
import { getBaseUrl } from "../utils"

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
  let { data } = await axios.get(getBaseUrl() + "/api/t_shirts")
  return {
    props: {
      data
    }
  }
}
