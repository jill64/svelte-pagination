import { expect, test } from '@playwright/test'

test('side:1 center:1 last:5', async ({ page }) => {
  await page.goto('/1')

  await page.getByPlaceholder('Side Size').fill('1')
  await page.getByPlaceholder('Center Size').fill('1')
  await page.getByPlaceholder('Last Page').fill('5')

  await expect(
    page.locator('span.paginate-current-page').filter({ hasText: '1' })
  ).toBeVisible()
  await expect(
    page.getByRole('link', { name: '2', exact: true })
  ).not.toBeVisible()
  await expect(
    page.getByRole('link', { name: '3', exact: true })
  ).not.toBeVisible()
  await expect(
    page.getByRole('link', { name: '4', exact: true })
  ).not.toBeVisible()
  await expect(page.getByRole('link', { name: '5', exact: true })).toBeVisible()
  await expect(
    page.getByRole('link', { name: 'Next' })
  ).toBeVisible()

  await page.goto('/2')

  await page.getByPlaceholder('Side Size').fill('1')
  await page.getByPlaceholder('Center Size').fill('1')
  await page.getByPlaceholder('Last Page').fill('5')

  await expect(
    page.getByRole('link', { name: 'Previous' })
  ).toBeVisible()
  await expect(page.getByRole('link', { name: '1', exact: true })).toBeVisible()
  await expect(
    page.locator('span.paginate-current-page').filter({ hasText: '2' })
  ).toBeVisible()
  await expect(
    page.getByRole('link', { name: '3', exact: true })
  ).not.toBeVisible()
  await expect(
    page.getByRole('link', { name: '4', exact: true })
  ).not.toBeVisible()
  await expect(page.getByRole('link', { name: '5', exact: true })).toBeVisible()
  await expect(
    page.getByRole('link', { name: 'Next' })
  ).toBeVisible()

  await page.goto('/5')

  await page.getByPlaceholder('Side Size').fill('1')
  await page.getByPlaceholder('Center Size').fill('1')
  await page.getByPlaceholder('Last Page').fill('5')

  await expect(
    page.getByRole('link', { name: 'Previous' })
  ).toBeVisible()
  await expect(page.getByRole('link', { name: '1', exact: true })).toBeVisible()
  await expect(
    page.getByRole('link', { name: '2', exact: true })
  ).not.toBeVisible()
  await expect(
    page.getByRole('link', { name: '3', exact: true })
  ).not.toBeVisible()
  await expect(
    page.getByRole('link', { name: '4', exact: true })
  ).not.toBeVisible()
  await expect(
    page.locator('span.paginate-current-page').filter({ hasText: '5' })
  ).toBeVisible()
})
