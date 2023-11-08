import { NextResponse } from 'next/server'

export function GET(): NextResponse {
  const data = { version: '14.0.1', updatedAt: new Date().toISOString() }
  return NextResponse.json(data)
}
