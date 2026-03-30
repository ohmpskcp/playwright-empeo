import { test, expect } from '@playwright/test';

export const otpDetect = async (page) => {
    
await page.waitForSelector('.otp-modal', { state: 'visible' });
await page.locator('.otp-input').first().click();
await page.keyboard.type('123456');
const verifyBtn = page.locator('[data-testid="button_button_registration_verify"]');
  await expect(verifyBtn).toBeEnabled();
  await verifyBtn.click();
}
  