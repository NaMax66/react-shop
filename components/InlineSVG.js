import React from "react"

export default function({icon, color}) {
  return <svg className={"inline-svg " + color}>
    <use xlinkHref={`sprite.svg#${icon}`} />
    <style jsx>{`
      .inline-svg {
        width: 100%;
        height: 100%;
        transition: all .3s;
      }
      .white-orange {
        fill: var(--c-white);
      }
      .white-orange:hover {
        fill: var(--c-orange);
      }
    `}</style>
  </svg>
}
