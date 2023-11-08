import { test, expect } from 'next/experimental/testmode/playwright'

// See: https://github.com/vercel/next.js/blob/canary/packages/next/src/experimental/testmode/playwright/README.md#or-use-the-nextexperimentaltestmodeplaywrightmsw

test.describe('page', () => {
  test('should be displayed', async ({ page, next }) => {
    // Given
    next.onFetch((request) => {
      console.log('## onFetch Mocked')
      return 'abort'
    })
    // When
    await page.goto('/ssr')

    // Then
    await expect(page.locator('.title')).toHaveText('SSR')
    await expect(page.locator('.version')).toHaveText('14.0.1')

    // Debug
    console.log(await page.innerText('div'))
  })
})
