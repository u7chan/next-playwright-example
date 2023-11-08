import React from 'react'

export default async function Page() {
  const data = await fetch('http://localhost:3000/api/version', { cache: 'no-store' })
  if (!data.ok) throw new Error(`API Error: ${data.status} ${data.statusText} - ${data.url} `)
  const { version, updatedAt } = await data.json()
  return (
    <div>
      <p>Home</p>
      <div>
        <span>Next.js: </span> <span>{version}</span>
      </div>
      <div>
        <span>{new Date(updatedAt).toLocaleString()}</span>
      </div>
    </div>
  )
}
