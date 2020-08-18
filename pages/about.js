import React, { Component } from "react"
import Link from "next/link"
import axios from "axios"

export default class extends Component {
  constructor(params) {
    super(params)
    this.state = {
      items: []
    }
  }

  render() {
    const { posts } = this.props
    return (
      <>
        <h1>This is an about page</h1>
        <div className="post_wrap">
          <h2>{posts.title}</h2>
          <p>{posts.body}</p>
        </div>
        <div className="link-wrap">
          <Link href='/'>
            Home
          </Link>
          <Link href='/test'>
            Test
          </Link>
        </div>
        <style jsx>{`
      `}</style>
      </>
    )
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
