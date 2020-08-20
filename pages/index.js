import Link from "next/link"

export default function Home() {
  return (
    <>
      <h1 className="title">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <p className="description">
        Get started by editing <code>pages/index.js</code>
      </p>

      <div className="links">
        <Link href="/books">
          <a className="link_item" href="/t_shirts">Books</a>
        </Link>
        <Link href="/t_shirts">
          <a className="link_item __black" href="/t_shirts">T-shirts</a>
        </Link>

        <Link href="/trinkets">
          <a className="link_item" href="/t_shirts">Geek's tools</a>
        </Link>
      </div>
      <style jsx>{`
        .link_item {
          display: inline-block;
          border-radius: 3px;
          border: 1px solid var(--c-orange);
          color: var(--c-orange);
          text-decoration: none;
          padding: 1rem 3rem;
          margin-top: 1rem;
          font-size: 2rem;
          transition: color .3s;
        }
        .link_item:not(:last-child) {
        margin-right: 2rem;
        }
        .link_item.__black {
          border: 1px solid var(--c-black);
          color: var(--c-black);
        }
        
        .link_item.__black:hover {
          background-color: var(--c-black);
        }
        
        .link_item:hover {
          color: var(--c-white);
          background-color: var(--c-orange);
        }
       
      `}</style>
    </>
  )
}
