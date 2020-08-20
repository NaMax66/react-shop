import React from "react"

export default function() {
  return <div className='header_wrap'>
    <style jsx>{`
      .header_wrap {
        position: fixed;
        top: 0;
        width: 100%;
        height: 6rem;
        background-color: var(--c-black);        
      }
    `}</style>
  </div>
}
