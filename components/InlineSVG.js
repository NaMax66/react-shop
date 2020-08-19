import React from "react"

export default function({icon}) {
  return <svg>
    <use xlinkHref={`sprite.svg#${icon}`} />
  </svg>
}
