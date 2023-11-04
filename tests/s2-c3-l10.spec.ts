import { expect, test } from '@playwright/test'

test('side:2 center:3 last:10 (Default)', async ({ page }) => {
  await page.goto('/1')

  await expect(page.locator('span').filter({ hasText: '1' })).toBeVisible()
  await expect(page.getByRole('link', { name: '2', exact: true })).toBeVisible()
  await expect(
    page.getByRole('link', { name: '3', exact: true })
  ).not.toBeVisible()

  await expect(
    page.getByRole('link', { name: '8', exact: true })
  ).not.toBeVisible()
  await expect(page.getByRole('link', { name: '9', exact: true })).toBeVisible()
  await expect(
    page.getByRole('link', { name: '10', exact: true })
  ).toBeVisible()
  await expect(page.getByRole('link', { name: 'Next' })).toBeVisible()

  await page.goto('/5')

  await expect(page.getByRole('link', { name: 'Previous' })).toBeVisible()
  await expect(page.getByRole('link', { name: '1', exact: true })).toBeVisible()
  await expect(page.getByRole('link', { name: '2', exact: true })).toBeVisible()
  await expect(
    page.getByRole('link', { name: '3', exact: true })
  ).not.toBeVisible()

  await expect(page.getByRole('link', { name: '4', exact: true })).toBeVisible()
  await expect(page.locator('span').filter({ hasText: '5' })).toBeVisible()
  await expect(page.getByRole('link', { name: '6', exact: true })).toBeVisible()
  await expect(
    page.getByRole('link', { name: '7', exact: true })
  ).not.toBeVisible()

  await expect(
    page.getByRole('link', { name: '8', exact: true })
  ).not.toBeVisible()
  await expect(page.getByRole('link', { name: '9', exact: true })).toBeVisible()
  await expect(
    page.getByRole('link', { name: '10', exact: true })
  ).toBeVisible()
  await expect(page.getByRole('link', { name: 'Next' })).toBeVisible()

  await page.goto('/10')

  await expect(page.getByRole('link', { name: 'Previous' })).toBeVisible()
  await expect(page.getByRole('link', { name: '1', exact: true })).toBeVisible()
  await expect(page.getByRole('link', { name: '2', exact: true })).toBeVisible()
  await expect(
    page.getByRole('link', { name: '3', exact: true })
  ).not.toBeVisible()

  await expect(
    page.getByRole('link', { name: '8', exact: true })
  ).not.toBeVisible()
  await expect(page.getByRole('link', { name: '9', exact: true })).toBeVisible()
  await expect(page.locator('span').filter({ hasText: '10' })).toBeVisible()
})
