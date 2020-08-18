import Head from "next/head"
import Link from "next/link"
import DefaultLayout from "../layouts/DefaultLayout"

export default function Home() {
  return (
    <DefaultLayout>
      <>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className="grid">
          <Link
            href="/about"
          >
            <a>
              <h3>About &rarr;</h3>
              <p>
                go to the about page
              </p>
            </a>
          </Link>
          <Link
            href="/test"
          >
            <a>
              <h3>Test &rarr;</h3>
              <p>
                go to test
              </p>
            </a>
          </Link>
        </div>
      </>
    </DefaultLayout>
  )
}
