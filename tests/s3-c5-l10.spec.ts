import { expect, test } from '@playwright/test'

test('side:3 center:5 last:20', async ({ page }) => {
  await page.goto('/1')

  await expect(
    page.getByRole('heading', { name: 'Keyboard Navigation' })
  ).toBeVisible()

  await expect(page.getByTestId('hydrated')).toBeAttached()
  await page.waitForTimeout(1000)

  await page.getByPlaceholder('Side Size').fill('3')
  await page.waitForTimeout(1000)

  await page.getByPlaceholder('Center Size').fill('5')
  await page.waitForTimeout(1000)

  await page.getByPlaceholder('Last Page').fill('20')
  await page.waitForTimeout(1000)

  await expect(
    page.locator('span.paginate-current-page').filter({ hasText: '1' })
  ).toBeVisible()
  await expect(page.getByRole('link', { name: '2', exact: true })).toBeVisible()
  await expect(page.getByRole('link', { name: '3', exact: true })).toBeVisible()
  await expect(
    page.getByRole('link', { name: '4', exact: true })
  ).not.toBeVisible()

  await expect(
    page.getByRole('link', { name: '17', exact: true })
  ).not.toBeVisible()
  await expect(
    page.getByRole('link', { name: '18', exact: true })
  ).toBeVisible()
  await expect(
    page.getByRole('link', { name: '19', exact: true })
  ).toBeVisible()
  await expect(
    page.getByRole('link', { name: '20', exact: true })
  ).toBeVisible()
  await expect(page.getByRole('link', { name: 'Next' })).toBeVisible()

  await page.goto('/5')

  await page.getByPlaceholder('Side Size').fill('3')
  await page.getByPlaceholder('Center Size').fill('5')
  await page.getByPlaceholder('Last Page').fill('20')

  await expect(page.getByRole('link', { name: 'Previous' })).toBeVisible()
  await expect(page.getByRole('link', { name: '1', exact: true })).toBeVisible()
  await expect(page.getByRole('link', { name: '2', exact: true })).toBeVisible()
  await expect(page.getByRole('link', { name: '3', exact: true })).toBeVisible()
  await expect(page.getByRole('link', { name: '4', exact: true })).toBeVisible()
  await expect(
    page.locator('span.paginate-current-page').filter({ hasText: '5' })
  ).toBeVisible()
  await expect(page.getByRole('link', { name: '6', exact: true })).toBeVisible()
  await expect(page.getByRole('link', { name: '7', exact: true })).toBeVisible()
  await expect(
    page.getByRole('link', { name: '8', exact: true })
  ).not.toBeVisible()

  await expect(
    page.getByRole('link', { name: '17', exact: true })
  ).not.toBeVisible()
  await expect(
    page.getByRole('link', { name: '18', exact: true })
  ).toBeVisible()
  await expect(
    page.getByRole('link', { name: '19', exact: true })
  ).toBeVisible()
  await expect(
    page.getByRole('link', { name: '20', exact: true })
  ).toBeVisible()
  await expect(page.getByRole('link', { name: 'Next' })).toBeVisible()

  await page.goto('/10')

  await page.getByPlaceholder('Side Size').fill('3')
  await page.getByPlaceholder('Center Size').fill('5')
  await page.getByPlaceholder('Last Page').fill('20')

  await expect(page.getByRole('link', { name: 'Previous' })).toBeVisible()
  await expect(page.getByRole('link', { name: '1', exact: true })).toBeVisible()
  await expect(page.getByRole('link', { name: '2', exact: true })).toBeVisible()
  await expect(page.getByRole('link', { name: '3', exact: true })).toBeVisible()
  await expect(
    page.getByRole('link', { name: '4', exact: true })
  ).not.toBeVisible()

  await expect(
    page.getByRole('link', { name: '7', exact: true })
  ).not.toBeVisible()
  await expect(page.getByRole('link', { name: '8', exact: true })).toBeVisible()
  await expect(page.getByRole('link', { name: '9', exact: true })).toBeVisible()
  await expect(
    page.locator('span.paginate-current-page').filter({ hasText: '10' })
  ).toBeVisible()
  await expect(
    page.getByRole('link', { name: '11', exact: true })
  ).toBeVisible()
  await expect(
    page.getByRole('link', { name: '12', exact: true })
  ).toBeVisible()
  await expect(
    page.getByRole('link', { name: '13', exact: true })
  ).not.toBeVisible()

  await expect(
    page.getByRole('link', { name: '17', exact: true })
  ).not.toBeVisible()
  await expect(
    page.getByRole('link', { name: '18', exact: true })
  ).toBeVisible()
  await expect(
    page.getByRole('link', { name: '19', exact: true })
  ).toBeVisible()
  await expect(
    page.getByRole('link', { name: '20', exact: true })
  ).toBeVisible()
  await expect(page.getByRole('link', { name: 'Next' })).toBeVisible()

  await page.goto('/15')

  await page.getByPlaceholder('Side Size').fill('3')
  await page.getByPlaceholder('Center Size').fill('5')
  await page.getByPlaceholder('Last Page').fill('20')

  await expect(page.getByRole('link', { name: 'Previous' })).toBeVisible()
  await expect(page.getByRole('link', { name: '1', exact: true })).toBeVisible()
  await expect(page.getByRole('link', { name: '2', exact: true })).toBeVisible()
  await expect(page.getByRole('link', { name: '3', exact: true })).toBeVisible()
  await expect(
    page.getByRole('link', { name: '4', exact: true })
  ).not.toBeVisible()

  await expect(
    page.getByRole('link', { name: '12', exact: true })
  ).not.toBeVisible()
  await expect(
    page.getByRole('link', { name: '13', exact: true })
  ).toBeVisible()
  await expect(
    page.getByRole('link', { name: '14', exact: true })
  ).toBeVisible()
  await expect(
    page.locator('span.paginate-current-page').filter({ hasText: '15' })
  ).toBeVisible()
  await expect(
    page.getByRole('link', { name: '16', exact: true })
  ).toBeVisible()
  await expect(
    page.getByRole('link', { name: '17', exact: true })
  ).toBeVisible()
  await expect(
    page.getByRole('link', { name: '18', exact: true })
  ).toBeVisible()
  await expect(
    page.getByRole('link', { name: '19', exact: true })
  ).toBeVisible()
  await expect(
    page.getByRole('link', { name: '20', exact: true })
  ).toBeVisible()
  await expect(
    page.getByRole('link', { name: '21', exact: true })
  ).not.toBeVisible()
  await expect(page.getByRole('link', { name: 'Next' })).toBeVisible()

  await page.goto('/20')

  await page.getByPlaceholder('Side Size').fill('3')
  await page.getByPlaceholder('Center Size').fill('5')
  await page.getByPlaceholder('Last Page').fill('20')

  await expect(page.getByRole('link', { name: 'Previous' })).toBeVisible()
  await expect(page.getByRole('link', { name: '1', exact: true })).toBeVisible()
  await expect(page.getByRole('link', { name: '2', exact: true })).toBeVisible()
  await expect(page.getByRole('link', { name: '3', exact: true })).toBeVisible()
  await expect(
    page.getByRole('link', { name: '4', exact: true })
  ).not.toBeVisible()

  await expect(
    page.getByRole('link', { name: '17', exact: true })
  ).not.toBeVisible()
  await expect(
    page.getByRole('link', { name: '18', exact: true })
  ).toBeVisible()
  await expect(
    page.getByRole('link', { name: '19', exact: true })
  ).toBeVisible()
  await expect(
    page.locator('span.paginate-current-page').filter({ hasText: '20' })
  ).toBeVisible()
  await expect(
    page.getByRole('link', { name: '21', exact: true })
  ).not.toBeVisible()
})
