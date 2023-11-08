import React from 'react'
import Link from 'next/link'

export default async function Page() {
  console.log('#ssr-st')
  const data = await fetch('http://localhost:3000/api/version', { cache: 'no-store' })
  if (!data.ok) throw new Error(`API Error: ${data.status} ${data.statusText} - ${data.url} `)
  const { version, updatedAt } = await data.json()
  console.log('#ssr-en')
  return (
    <div>
      <p className='title'>SSR</p>
      <Link href='/'>Home</Link>
      <div>
        <span>Next.js: </span> <span className='version'>{version}</span>
      </div>
      <div>
        <span className='updated-at'>{new Date(updatedAt).toLocaleString()}</span>
      </div>
    </div>
  )
}
