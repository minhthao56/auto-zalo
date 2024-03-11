import { test, expect } from '@playwright/test';

test.use({
  storageState: 'user.json'
});

test('test', async ({ page }) => {
  await page.goto('https://chat.zalo.me/');
  await page.getByTitle('Danh bạ').locator('i').click();
  await page.getByTitle('Tin nhắn').locator('i').click();
  await page.getByTitle('Thêm bạn').click();
  await page.getByPlaceholder('Số điện thoại ').click();
  await page.locator('.zl-modal__dialog__header > .flx > .z--btn--v2 > .fa').click();
  await page.getByTitle('Danh bạ').click();
  await page.locator('p').filter({ hasText: 'Lời mời kết bạn' }).click();
  await page.locator('div').filter({ hasText: /^Danh sách nhóm$/ }).click();
  await page.locator('div').filter({ hasText: /^Danh sách bạn bè$/ }).click();
  await page.getByPlaceholder('Tìm bạn').click();
  await page.getByPlaceholder('Tìm bạn').fill('');
  await page.getByTitle('Thêm bạn').locator('i').click();
  await page.getByPlaceholder('Số điện thoại ').click();
  await page.getByPlaceholder('Số điện thoại ').fill('0364570908');
  await page.locator('div').filter({ hasText: /^Tìm kiếm$/ }).nth(2).click();
  await page.locator('div').filter({ hasText: /^Kết bạn$/ }).first().click();
  await page.getByText('Kết bạn', { exact: true }).click();
});