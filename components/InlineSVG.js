import React from "react"

export default function({icon}) {
  return <svg className="inline-svg">
    <use xlinkHref={`sprite.svg#${icon}`} />
  </svg>
}
