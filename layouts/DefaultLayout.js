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
                <InlineSVG color="white-orange" icon="telegram"/>
              </a>
              <a className="v-footer_social-link" href="https://github.com/NaMax66" target="_blank">
                <InlineSVG color="white-orange" icon="github"/>
              </a>
              <a className="v-footer_social-link" href="https://www.linkedin.com/in/max-naydovich" target="_blank">
                <InlineSVG color="white-orange" icon="linkedin"/>
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
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
          display: inline-block;
          width: 4rem;
          height: 4rem;
        }
       
        .v-footer-info p {
          flex-basis: 30%;
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
          font-size: 62.5%;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }
        .wrapper {
          max-width: 140rem;
          margin: 0 auto;
          padding: 0 2rem;
        }
      `}</style>
    </div>
  )
}
