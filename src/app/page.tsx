import React from 'react'

export default function Page() {
  const version = '14.0.1'
  return (
    <div>
      <p>Home</p>
      <div>
        <span>Next.js: </span> <span>{version}</span>
      </div>
    </div>
  )
}
