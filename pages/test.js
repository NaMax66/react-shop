import Link from "next/link"

export default function() {
  return (
    <>
      <h1>Test page</h1>
      <Link href='/'>
        <a>
          Go to main
        </a>
      </Link>
    </>
  )
}
