import React, { Component } from "react"
import Head from "next/head"
import axios from "axios"

export default class extends Component {
  constructor(params) {
    super(params)
    this.state = {
      items: []
    }
  }

  render() {
    return (
      <div className="container">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico"/>
        </Head>

        <main>
          <h1>Hello</h1>
          {this.props.posts.title}
        </main>
        <footer>

        </footer>
        <style jsx>{`
        .container {
          background-color: antiquewhite;
        }
      `}</style>
      </div>
    )
  }
}


export async function getStaticProps(context) {
  let {data} = await axios.get("https://jsonplaceholder.typicode.com/posts/2")

  return {
    props: {
      posts: data
    }
  }
}
