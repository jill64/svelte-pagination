import { expect, test } from '@playwright/test'

test('side:2 center:3 last:10 (Default)', async ({ page }) => {
  await page.goto('/svelte-pagination/1')

  await expect(page.locator('span').filter({ hasText: '1' })).toBeVisible()
  await expect(page.getByRole('link', { name: '2', exact: true })).toBeVisible()
  await expect(page.getByRole('link', { name: '9', exact: true })).toBeVisible()
  await expect(
    page.getByRole('link', { name: '10', exact: true })
  ).toBeVisible()
  await expect(page.getByRole('link', { name: 'Next' })).toBeVisible()

  await page.goto('/svelte-pagination/5')

  await expect(page.getByRole('link', { name: 'Previous' })).toBeVisible()
  await expect(page.getByRole('link', { name: '1', exact: true })).toBeVisible()
  await expect(page.getByRole('link', { name: '2', exact: true })).toBeVisible()
  await expect(page.getByRole('link', { name: '4', exact: true })).toBeVisible()
  await expect(page.locator('span').filter({ hasText: '5' })).toBeVisible()
  await expect(page.getByRole('link', { name: '6', exact: true })).toBeVisible()
  await expect(page.getByRole('link', { name: '9', exact: true })).toBeVisible()
  await expect(
    page.getByRole('link', { name: '10', exact: true })
  ).toBeVisible()
  await expect(page.getByRole('link', { name: 'Next' })).toBeVisible()

  await page.goto('/svelte-pagination/10')

  await expect(page.getByRole('link', { name: 'Previous' })).toBeVisible()
  await expect(page.getByRole('link', { name: '1', exact: true })).toBeVisible()
  await expect(page.getByRole('link', { name: '2', exact: true })).toBeVisible()
  await expect(page.getByRole('link', { name: '9', exact: true })).toBeVisible()
  await expect(page.locator('span').filter({ hasText: '10' })).toBeVisible()
})

test('side:1 center:1 last:5', async ({ page }) => {
  await page.goto('/svelte-pagination/1')

  await page.getByPlaceholder('Side Size').fill('1')
  await page.getByPlaceholder('Center Size').fill('1')
  await page.getByPlaceholder('Last Page').fill('5')

  await expect(page.locator('span').filter({ hasText: '1' })).toBeVisible()
  await expect(page.getByRole('link', { name: '5', exact: true })).toBeVisible()
  await expect(page.getByRole('link', { name: 'Next' })).toBeVisible()

  await page.goto('/svelte-pagination/2')

  await page.getByPlaceholder('Side Size').fill('1')
  await page.getByPlaceholder('Center Size').fill('1')
  await page.getByPlaceholder('Last Page').fill('5')

  await expect(page.getByRole('link', { name: 'Previous' })).toBeVisible()
  await expect(page.getByRole('link', { name: '1', exact: true })).toBeVisible()
  await expect(page.locator('span').filter({ hasText: '2' })).toBeVisible()
  await expect(page.getByRole('link', { name: '5', exact: true })).toBeVisible()
  await expect(page.getByRole('link', { name: 'Next' })).toBeVisible()

  await page.goto('/svelte-pagination/5')

  await page.getByPlaceholder('Side Size').fill('1')
  await page.getByPlaceholder('Center Size').fill('1')
  await page.getByPlaceholder('Last Page').fill('5')

  await expect(page.getByRole('link', { name: 'Previous' })).toBeVisible()
  await expect(page.getByRole('link', { name: '1', exact: true })).toBeVisible()
  await expect(page.locator('span').filter({ hasText: '5' })).toBeVisible()
})

test('side:3 center:5 last:20', async ({ page }) => {
  await page.goto('/svelte-pagination/1')

  await page.getByPlaceholder('Side Size').fill('3')
  await page.getByPlaceholder('Center Size').fill('5')
  await page.getByPlaceholder('Last Page').fill('20')

  await expect(page.locator('span').filter({ hasText: '1' })).toBeVisible()
  await expect(page.getByRole('link', { name: '2', exact: true })).toBeVisible()
  await expect(page.getByRole('link', { name: '3', exact: true })).toBeVisible()
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

  await page.goto('/svelte-pagination/5')

  await page.getByPlaceholder('Side Size').fill('3')
  await page.getByPlaceholder('Center Size').fill('5')
  await page.getByPlaceholder('Last Page').fill('20')

  await expect(page.getByRole('link', { name: 'Previous' })).toBeVisible()
  await expect(page.getByRole('link', { name: '1', exact: true })).toBeVisible()
  await expect(page.getByRole('link', { name: '2', exact: true })).toBeVisible()
  await expect(page.getByRole('link', { name: '3', exact: true })).toBeVisible()
  await expect(page.getByRole('link', { name: '4', exact: true })).toBeVisible()
  await expect(page.locator('span').filter({ hasText: '5' })).toBeVisible()
  await expect(page.getByRole('link', { name: '6', exact: true })).toBeVisible()
  await expect(page.getByRole('link', { name: '7', exact: true })).toBeVisible()
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

  await page.goto('/svelte-pagination/10')

  await page.getByPlaceholder('Side Size').fill('3')
  await page.getByPlaceholder('Center Size').fill('5')
  await page.getByPlaceholder('Last Page').fill('20')

  await expect(page.getByRole('link', { name: 'Previous' })).toBeVisible()
  await expect(page.getByRole('link', { name: '1', exact: true })).toBeVisible()
  await expect(page.getByRole('link', { name: '2', exact: true })).toBeVisible()
  await expect(page.getByRole('link', { name: '3', exact: true })).toBeVisible()
  await expect(page.getByRole('link', { name: '8', exact: true })).toBeVisible()
  await expect(page.getByRole('link', { name: '9', exact: true })).toBeVisible()
  await expect(page.locator('span').filter({ hasText: '10' })).toBeVisible()
  await expect(
    page.getByRole('link', { name: '11', exact: true })
  ).toBeVisible()
  await expect(
    page.getByRole('link', { name: '12', exact: true })
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
  await expect(page.getByRole('link', { name: 'Next' })).toBeVisible()

  await page.goto('/svelte-pagination/15')

  await page.getByPlaceholder('Side Size').fill('3')
  await page.getByPlaceholder('Center Size').fill('5')
  await page.getByPlaceholder('Last Page').fill('20')

  await expect(page.getByRole('link', { name: 'Previous' })).toBeVisible()
  await expect(page.getByRole('link', { name: '1', exact: true })).toBeVisible()
  await expect(page.getByRole('link', { name: '2', exact: true })).toBeVisible()
  await expect(page.getByRole('link', { name: '3', exact: true })).toBeVisible()
  await expect(
    page.getByRole('link', { name: '13', exact: true })
  ).toBeVisible()
  await expect(
    page.getByRole('link', { name: '14', exact: true })
  ).toBeVisible()
  await expect(page.locator('span').filter({ hasText: '15' })).toBeVisible()
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
  await expect(page.getByRole('link', { name: 'Next' })).toBeVisible()

  await page.goto('/svelte-pagination/20')

  await page.getByPlaceholder('Side Size').fill('3')
  await page.getByPlaceholder('Center Size').fill('5')
  await page.getByPlaceholder('Last Page').fill('20')

  await expect(page.getByRole('link', { name: 'Previous' })).toBeVisible()
  await expect(page.getByRole('link', { name: '1', exact: true })).toBeVisible()
  await expect(page.getByRole('link', { name: '2', exact: true })).toBeVisible()
  await expect(page.getByRole('link', { name: '3', exact: true })).toBeVisible()
  await expect(
    page.getByRole('link', { name: '18', exact: true })
  ).toBeVisible()
  await expect(
    page.getByRole('link', { name: '19', exact: true })
  ).toBeVisible()
  await expect(page.locator('span').filter({ hasText: '20' })).toBeVisible()
})
