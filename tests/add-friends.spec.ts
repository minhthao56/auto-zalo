import { test, expect, chromium } from '@playwright/test';

test('add friends', async ({  }) => {
  const browser = await chromium.connectOverCDP('http://localhost:9222');

  const defaultContext = browser.contexts()[0]
  const page = defaultContext.pages()[0]
  await page.goto('https://chat.zalo.me/');
  await page.getByTitle('Thêm bạn').locator('i').click();
  await page.getByPlaceholder('Số điện thoại ').fill('969198695');
  await page.locator('div').filter({ hasText: /^Tìm kiếm$/ }).nth(2).click();
  await page.locator('div').filter({ hasText: /^Kết bạn$/ }).first().click();

  const isVisible = await page.locator('div').filter({ hasText: /^Kết bạn$/ }).first().isVisible();
  if (isVisible) {
    await page.locator('div').filter({ hasText: /^Kết bạn$/ }).first().click()
  }else{
    await page.locator('.zl-modal__dialog__header > .flx > .z--btn--v2').click();
  }
  await page.waitForTimeout(10000);
});