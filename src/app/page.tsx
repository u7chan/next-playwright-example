import React from 'react'
import Link from 'next/link'

export default function Page() {
  return (
    <div>
      <p>Next.js Example</p>
      <nav>
        <ul>
          <li>
            <Link href='/ssg'>SSG</Link>
          </li>
          <li>
            <Link href='/ssr'>SSR</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
