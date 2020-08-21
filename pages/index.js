import Link from "next/link"
import AppLogo from "../components/AppLogo"
export default function Home() {
  return (
    <>
      <div className="wrapper info-wrapper">
        <AppLogo />
        <h1 className='title'>ReactShop - shop for hobbyists</h1>
        <h2 className='subtitle'>Books, T-shirts, and sundries - for those who value their development and <br/> love stylish, pleasant-looking clothes.</h2>
      </div>
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
        .info-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .title {
          font-weight: 400;
          font-size: 6rem;
          color: var(-c--black);
          margin-bottom: 2rem;
          text-align: center;
        }
        .subtitle {
          font-weight: 300;
          font-size: 4rem;
          color: var(-c--black);
          margin-bottom: 5rem;
          text-align: center;
        }
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
