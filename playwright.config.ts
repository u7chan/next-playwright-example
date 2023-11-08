import type { PlaywrightTestConfig } from '@playwright/test'
import { devices } from '@playwright/test'

const config: PlaywrightTestConfig = {
  testDir: './src/tests',
  use: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
}

export default config