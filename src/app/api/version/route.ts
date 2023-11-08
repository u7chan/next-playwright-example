import { NextResponse } from 'next/server'

export function GET(): NextResponse {
  console.log('#api: /api/version')
  const data = { version: '14.0.1', updatedAt: new Date().toISOString() }
  return NextResponse.json(data)
}
