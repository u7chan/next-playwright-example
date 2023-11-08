import { test, expect } from '@playwright/test'

test.describe('page', () => {
  test('should be displayed', async ({ page }) => {
    await page.goto('/ssg')
    await expect(page.locator('.title')).toHaveText('SSG')
    await expect(page.locator('.version')).toHaveText('14.0.1')
  })
})
