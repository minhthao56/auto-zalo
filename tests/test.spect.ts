import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://chat.zalo.me/');
  await page.goto('https://id.zalo.me/account?continue=https%3A%2F%2Fchat.zalo.me%2F');
  await page.goto('https://chat.zalo.me/');
  await page.getByTitle('Thêm bạn').locator('i').click();
  await page.getByPlaceholder('Số điện thoại ').fill('0364');
  await page.locator('div').filter({ hasText: /^Tìm kiếm$/ }).nth(2).click();
  await page.locator('.zl-modal__dialog__header > div > .fa').click();
  await page.getByPlaceholder('Số điện thoại ').click();
  await page.getByPlaceholder('Số điện thoại ').click();
  await page.getByPlaceholder('Số điện thoại ').fill('0847463123');
  await page.locator('#zl-modal__dialog-body').getByText('Tìm kiếm').click();
  const isVisible = await page.locator('div').filter({ hasText: /^Kết bạn$/ }).first().isVisible();
  if (isVisible) {
    await page.locator('div').filter({ hasText: /^Kết bạn$/ }).first().click()
  }
  await page.waitForTimeout(10000);
});