import React from "react"
import Link from "next/link"
import DefaultLayout from "../layouts/DefaultLayout"


export default function() {
  return (
    <DefaultLayout>
      <div>
        <h1>Test page</h1>
        <Link href='/' >
          <a>
            Go to main
          </a>
        </Link>
      </div>
    </DefaultLayout>
  )
}
