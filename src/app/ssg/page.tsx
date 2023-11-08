import React from 'react'
import Link from 'next/link'

export default async function Page() {
  const data = await fetch('http://localhost:3000/api/version', { cache: 'force-cache' })
  if (!data.ok) throw new Error(`API Error: ${data.status} ${data.statusText} - ${data.url} `)
  const { version, updatedAt } = await data.json()
  return (
    <div>
      <p>SSG</p>
      <Link href='/'>Home</Link>
      <div>
        <span>Next.js: </span> <span>{version}</span>
      </div>
      <div>
        <span>{new Date(updatedAt).toLocaleString()}</span>
      </div>
    </div>
  )
}
