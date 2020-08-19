import Head from "next/head"
import React from "react"
import Navbar from "../components/Navbar"
import InlineSVG from "../components/InlineSVG"

export default function({ children }) {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Navbar/>
      <main>
        {children}
      </main>

      <footer className="v-footer_background">
        <div className="wrapper">
          <div className="v-footer-info">
            <p>&copy; This is a sample website by <br/> Max Naidovich </p>
            <div className="v-footer_social">
              <a className="v-footer_social-link" href="https://t.me/namax66" target="_blank">
                <InlineSVG icon="telegram"/>
              </a>
              <a className="v-footer_social-link" href="https://github.com/NaMax66" target="_blank">
                <InlineSVG icon="github"/>
              </a>
              <a className="v-footer_social-link" href="https://www.linkedin.com/in/max-naydovich" target="_blank">
                <InlineSVG icon="linkedin"/>
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .v-footer_background {
          background-color: var(--c-black);
        }
        .v-footer-info {
          font-size: 1.8rem;
          color: var(--c-white);
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 2rem 0;
        }
        .v-footer_social-link {
          width: 40px;
          height: 40px;
        }
       
        
        
        .v-footer-info p {
          flex-basis: 30%;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        :root {
          --c-white: #F5F5F5;
          --c-light-gray: #BDBDBD;
          --c-black: #212121;
          --c-orange: #f56a3f;
        }
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
