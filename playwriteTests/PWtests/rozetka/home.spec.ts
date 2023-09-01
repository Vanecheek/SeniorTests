import { test, expect } from '@playwright/test';

test('check some good', async ({ page }) => {
    await page.goto('https://rozetka.com.ua/');

    expect(page).toHaveTitle('Інтернет-магазин ROZETKA™: офіційний сайт найпопулярнішого онлайн-гіпермаркету в Україні');
    const searchInput = await page.locator("input[name='search']");
    await searchInput.waitFor({ state: 'visible' });
    await searchInput.fill("Жінка");
    const searchResult = await page.locator("xpath=//div[contains(@class,'search')]/ul/li[1]");
    await searchResult.click();
});