import { test, expect } from "@playwright/test";
import { fullScreenMode } from "../hooks/fullscreen";
import { otpDetect } from "../hooks/otpdetect";
import { faker, en, th } from "@faker-js/faker";
import { createRandomUser } from "../hooks/faker";

test.beforeEach(async ({ page }) => {
  await fullScreenMode(page);
  await page.goto('https://portal.uat.gofive.co.th/Register/empeo');
});

test("company without coupon", async ({ page }) => {


    await page.waitForLoadState("networkidle");
    await page.getByTestId("setting_language").getByText("ไทย").click();
    await page
        .locator(".go5-dropdown-item-body > .go5-dropdown-item-body")
        .first()
        .click();
    await page.getByTestId("input_textfield_input_registration_tax_id").click();
    await page
        .getByTestId("input_textfield_input_registration_tax_id")
        .fill("0103555000178");
    await page.getByText("ห้างหุ้นส่วนจำกัด 123แอ๊คชั่น").click();

    await page.getByText("Number of employee?*").click();
    await page
        .locator(".go5-dropdown-item-body > .go5-dropdown-item-body")
        .first()
        .click();
    await page.getByText(" Your business type*").click();

    await page
        .locator("div")
        .filter({ hasText: /^Wholesale$/ })
        .nth(1)
        .click();
    await page
        .locator(
            ".go5-form-field.go5-primary.go5-enabled.go5-hover > .go5-form-field-block > .go5-form-field-content-template > .go5-form-field-content-template-body",
        )
        .click();
    await page.getByTestId("input_textfield_input_registration_email").click();
    await page
        .getByTestId("input_textfield_input_registration_email")
        .fill(createRandomUser().email);
    await page.getByTestId("input_textfield_input_register_first_name").click();
    await page
        .getByTestId("input_textfield_input_register_first_name")
        .fill(createRandomUser().firstName);
    await page.getByTestId("input_textfield_input_register_last_name").click();
    await page
        .getByTestId("input_textfield_input_register_last_name")
        .fill(createRandomUser().lastName);
    await page.getByRole("textbox", { name: "Mobile Number*" }).click();
    await page
        .getByRole("textbox", { name: "Mobile Number*" })
        .fill("0967690708");
    await page.getByTestId("input_checkbox_registration_checkbox").check();
    await page.getByTestId("button_submit_registration_try_for_free").click();
    await otpDetect(page);

     await page.getByText("Create your password").waitFor({
        timeout: 120000,
        state: "visible",
    });
});

test("company with coupon", async ({ page }) => {
    await page.waitForLoadState("networkidle");
    await page.getByTestId("setting_language").getByText("ไทย").click();
    await page
        .locator(".go5-dropdown-item-body > .go5-dropdown-item-body")
        .first()
        .click();
    await page.getByTestId("input_textfield_input_registration_tax_id").click();
    await page
        .getByTestId("input_textfield_input_registration_tax_id")
        .fill("0103555000178");
    await page.getByText("ห้างหุ้นส่วนจำกัด 123แอ๊คชั่น").click();

    await page.getByText("Number of employee?*").click();
    await page
        .locator(".go5-dropdown-item-body > .go5-dropdown-item-body")
        .first()
        .click();
    await page.getByText(" Your business type*").click();

    await page
        .locator("div")
        .filter({ hasText: /^Wholesale$/ })
        .nth(1)
        .click();
    await page
        .locator(
            ".go5-form-field.go5-primary.go5-enabled.go5-hover > .go5-form-field-block > .go5-form-field-content-template > .go5-form-field-content-template-body",
        )
        .click();
    await page.getByTestId("input_textfield_input_registration_email").click();
    await page
        .getByTestId("input_textfield_input_registration_email")
        .fill(createRandomUser().email);
    await page.getByTestId("input_textfield_input_register_first_name").click();
    await page
        .getByTestId("input_textfield_input_register_first_name")
        .fill(createRandomUser().firstName);
    await page.getByTestId("input_textfield_input_register_last_name").click();
    await page
        .getByTestId("input_textfield_input_register_last_name")
        .fill(createRandomUser().lastName);
    await page.getByRole("textbox", { name: "Mobile Number*" }).click();
    await page
        .getByRole("textbox", { name: "Mobile Number*" })
        .fill("0967690708");
    await page.getByText("Redeem a promo code").click();
    await page.getByTestId("input_text_registration_coupon_code").click();
    await page
        .getByTestId("input_text_registration_coupon_code")
        .fill("FREE15DAY");
    await page.getByTestId("input_button_registration_btn_apply").click();
    await page.getByTestId("input_checkbox_registration_checkbox").check();

    await page.getByTestId("button_submit_registration_try_for_free").click();

    await otpDetect(page);

     await page.getByText("Create your password").waitFor({
        timeout: 120000,
        state: "visible",
    });
});

test("Registration without coupon(Others)", async ({ page }) => {

    await page.waitForLoadState("networkidle");
    await page.getByTestId("setting_language").getByText("ไทย").click();
    await page
        .locator(".go5-dropdown-item-body > .go5-dropdown-item-body")
        .first()
        .click();

    await page.getByText("Others").click();
    await page
        .getByTestId("input_textfield_input_register_company_name")
        .fill(createRandomUser().username);
    await page.getByText("Number of employee?*").click();
    await page
        .locator(".go5-dropdown-item-body > .go5-dropdown-item-body")
        .first()
        .click();
    await page.getByText(" Your business type*").click();

    await page
        .locator("div")
        .filter({ hasText: /^Wholesale$/ })
        .nth(1)
        .click();
    await page.getByTestId("input_textfield_input_registration_email").click();
    await page
        .getByTestId("input_textfield_input_registration_email")
        .fill(createRandomUser().email);
    await page
        .getByTestId("input_textfield_input_register_first_name")
        .fill(createRandomUser().firstName);
    await page.getByTestId("input_textfield_input_register_last_name").click();
    await page
        .getByTestId("input_textfield_input_register_last_name")
        .fill(createRandomUser().lastName);
    await page.getByRole("textbox", { name: "Mobile Number*" }).click();
    await page
        .getByRole("textbox", { name: "Mobile Number*" })
        .fill("0967690708");

    await page.getByTestId("input_checkbox_registration_checkbox").check();
    await page.getByTestId("button_submit_registration_try_for_free").click();

    await otpDetect(page);
    
});

test("Registration with coupon(Others)", async ({ page }) => {

    await page.waitForLoadState("networkidle");
    await page.getByTestId("setting_language").getByText("ไทย").click();
    await page
        .locator(".go5-dropdown-item-body > .go5-dropdown-item-body")
        .first()
        .click();

    await page.getByText("Others").click();
    await page
        .getByTestId("input_textfield_input_register_company_name")
        .fill(createRandomUser().username);
    await page.getByText("Number of employee?*").click();
    await page
        .locator(".go5-dropdown-item-body > .go5-dropdown-item-body")
        .first()
        .click();
    await page.getByText(" Your business type*").click();

    await page
        .locator("div")
        .filter({ hasText: /^Wholesale$/ })
        .nth(1)
        .click();
    await page.getByTestId("input_textfield_input_registration_email").click();
    await page
        .getByTestId("input_textfield_input_registration_email")
        .fill(createRandomUser().email);
    await page
        .getByTestId("input_textfield_input_register_first_name")
        .fill(createRandomUser().firstName);
    await page.getByTestId("input_textfield_input_register_last_name").click();
    await page
        .getByTestId("input_textfield_input_register_last_name")
        .fill(createRandomUser().lastName);
    await page.getByRole("textbox", { name: "Mobile Number*" }).click();
    await page
        .getByRole("textbox", { name: "Mobile Number*" })
        .fill("0967690708");
    await page.getByText("Redeem a promo code").click();
    await page.getByTestId("input_text_registration_coupon_code").click();
    await page
        .getByTestId("input_text_registration_coupon_code")
        .fill("FREE15DAY");
    await page.getByTestId("input_checkbox_registration_checkbox").check();
    await page.getByTestId("button_submit_registration_try_for_free").click();

    await otpDetect(page);
});

test("Create Password", async ({ page }) => {

    await page.waitForLoadState("networkidle");
    await page.getByTestId("setting_language").getByText("ไทย").click();
    await page
        .locator(".go5-dropdown-item-body > .go5-dropdown-item-body")
        .first()
        .click();

    await page.getByText("Others").click();
    await page
        .getByTestId("input_textfield_input_register_company_name")
        .fill(createRandomUser().username);
    await page.getByText("Number of employee?*").click();
    await page
        .locator(".go5-dropdown-item-body > .go5-dropdown-item-body")
        .first()
        .click();
    await page.getByText(" Your business type*").click();

    await page
        .locator("div")
        .filter({ hasText: /^Wholesale$/ })
        .nth(1)
        .click();
    await page.getByTestId("input_textfield_input_registration_email").click();
    await page
        .getByTestId("input_textfield_input_registration_email")
        .fill(createRandomUser().email);
    await page
        .getByTestId("input_textfield_input_register_first_name")
        .fill(createRandomUser().firstName);
    await page.getByTestId("input_textfield_input_register_last_name").click();
    await page
        .getByTestId("input_textfield_input_register_last_name")
        .fill(createRandomUser().lastName);
    await page.getByRole("textbox", { name: "Mobile Number*" }).click();
    await page
        .getByRole("textbox", { name: "Mobile Number*" })
        .fill("0967690708");
    await page.getByText("Redeem a promo code").click();
    await page.getByTestId("input_text_registration_coupon_code").click();
    await page
        .getByTestId("input_text_registration_coupon_code")
        .fill("FREE15DAY");
    await page.getByTestId("input_checkbox_registration_checkbox").check();
    await page.getByTestId("button_submit_registration_try_for_free").click();

    await otpDetect(page);
    await page.getByText("Create your password").waitFor({
        timeout: 120000,
        state: "visible",
    });
    //Create password
    await page
        .getByTestId("input_textfield_input_input_password_crate_password_password")
        .click();
    await page
        .getByTestId("input_textfield_input_input_password_crate_password_password")
        .fill("Test1234!");
    await page
        .getByTestId(
            "input_textfield_input_input_password_crate_password_confirm_password",
        )
        .click();
    await page
        .getByTestId(
            "input_textfield_input_input_password_crate_password_confirm_password",
        )
        .fill("Test1234!");
    await page.getByTestId("button_button_create_password_btn_next").click();
});

test("Min Password", async ({ page }) => {

    await page.waitForLoadState("networkidle");
    await page.getByTestId("setting_language").getByText("ไทย").click();
    await page
        .locator(".go5-dropdown-item-body > .go5-dropdown-item-body")
        .first()
        .click();

    await page.getByText("Others").click();
    await page
        .getByTestId("input_textfield_input_register_company_name")
        .fill(createRandomUser().username);
    await page.getByText("Number of employee?*").click();
    await page
        .locator(".go5-dropdown-item-body > .go5-dropdown-item-body")
        .first()
        .click();
    await page.getByText(" Your business type*").click();

    await page
        .locator("div")
        .filter({ hasText: /^Wholesale$/ })
        .nth(1)
        .click();
    await page.getByTestId("input_textfield_input_registration_email").click();
    await page
        .getByTestId("input_textfield_input_registration_email")
        .fill(createRandomUser().email);
    await page
        .getByTestId("input_textfield_input_register_first_name")
        .fill(createRandomUser().firstName);
    await page.getByTestId("input_textfield_input_register_last_name").click();
    await page
        .getByTestId("input_textfield_input_register_last_name")
        .fill(createRandomUser().lastName);
    await page.getByRole("textbox", { name: "Mobile Number*" }).click();
    await page
        .getByRole("textbox", { name: "Mobile Number*" })
        .fill("0967690708");
    await page.getByText("Redeem a promo code").click();
    await page.getByTestId("input_text_registration_coupon_code").click();
    await page
        .getByTestId("input_text_registration_coupon_code")
        .fill("FREE15DAY");
    await page.getByTestId("input_checkbox_registration_checkbox").check();
    await page.getByTestId("button_submit_registration_try_for_free").click();

    await otpDetect(page);

    await page.getByText("Create your password").waitFor({
        timeout: 120000,
        state: "visible",
    });
    await page
        .getByTestId("input_textfield_input_input_password_crate_password_password")
        .click();
    await page
        .getByTestId("input_textfield_input_input_password_crate_password_password")
        .fill("Test123");
    await page
        .getByTestId(
            "input_textfield_input_input_password_crate_password_confirm_password",
        )
        .click();
    await page
        .getByTestId(
            "input_textfield_input_input_password_crate_password_confirm_password",
        )
        .fill("Test123");

    const btn = page.getByTestId("button_button_create_password_btn_next");

    await btn.waitFor();
    await expect(btn).toBeDisabled();
});

test("OTP verification flow", async ({ page }) => {
    await page.waitForLoadState("networkidle");
    await page.getByTestId("setting_language").getByText("ไทย").click();
    await page
        .locator(".go5-dropdown-item-body > .go5-dropdown-item-body")
        .first()
        .click();

    await page.getByText("Others").click();
    await page
        .getByTestId("input_textfield_input_register_company_name")
        .fill(createRandomUser().username);
    await page.getByText("Number of employee?*").click();
    await page
        .locator(".go5-dropdown-item-body > .go5-dropdown-item-body")
        .first()
        .click();
    await page.getByText(" Your business type*").click();

    await page
        .locator("div")
        .filter({ hasText: /^Wholesale$/ })
        .nth(1)
        .click();
    await page.getByTestId("input_textfield_input_registration_email").click();
    await page
        .getByTestId("input_textfield_input_registration_email")
        .fill(createRandomUser().email);
    await page
        .getByTestId("input_textfield_input_register_first_name")
        .fill(createRandomUser().firstName);
    await page.getByTestId("input_textfield_input_register_last_name").click();
    await page
        .getByTestId("input_textfield_input_register_last_name")
        .fill(createRandomUser().lastName);
    await page.getByRole("textbox", { name: "Mobile Number*" }).click();
    await page
        .getByRole("textbox", { name: "Mobile Number*" })
        .fill("0967690708");
    await page.getByText("Redeem a promo code").click();
    await page.getByTestId("input_text_registration_coupon_code").click();
    await page
        .getByTestId("input_text_registration_coupon_code")
        .fill("FREE15DAY");
    await page.getByTestId("input_checkbox_registration_checkbox").check();
    await page.getByTestId("button_submit_registration_try_for_free").click();

    await otpDetect(page);
    page.waitForResponse((res) => res.url().includes("otp"));
    await page.waitForLoadState("networkidle");
    await page.getByText("Create your password").waitFor({ timeout: 100000 });
});

test("Resend OTP", async ({ page }) => {
    await page.waitForLoadState("networkidle");
    await page.getByTestId("setting_language").getByText("ไทย").click();
    await page
        .locator(".go5-dropdown-item-body > .go5-dropdown-item-body")
        .first()
        .click();

    await page.getByText("Others").click();
    await page
        .getByTestId("input_textfield_input_register_company_name")
        .fill(createRandomUser().username);
    await page.getByText("Number of employee?*").click();
    await page
        .locator(".go5-dropdown-item-body > .go5-dropdown-item-body")
        .first()
        .click();
    await page.getByText(" Your business type*").click();

    await page
        .locator("div")
        .filter({ hasText: /^Wholesale$/ })
        .nth(1)
        .click();
    await page.getByTestId("input_textfield_input_registration_email").click();
    await page
        .getByTestId("input_textfield_input_registration_email")
        .fill(createRandomUser().email);
    await page
        .getByTestId("input_textfield_input_register_first_name")
        .fill(createRandomUser().firstName);
    await page.getByTestId("input_textfield_input_register_last_name").click();
    await page
        .getByTestId("input_textfield_input_register_last_name")
        .fill(createRandomUser().lastName);
    await page.getByRole("textbox", { name: "Mobile Number*" }).click();
    await page
        .getByRole("textbox", { name: "Mobile Number*" })
        .fill("0967690708");
    await page.getByText("Redeem a promo code").click();
    await page.getByTestId("input_text_registration_coupon_code").click();
    await page
        .getByTestId("input_text_registration_coupon_code")
        .fill("FREE15DAY");
    await page.getByTestId("input_checkbox_registration_checkbox").check();

    await page.getByTestId("button_submit_registration_try_for_free").click();
    await page.waitForSelector(".otp-modal", { state: "visible" });
    await page.locator(".otp-input").first().click();
    await page.keyboard.type("123456");
    await expect(
        page.getByTestId("button_button_registration_otp_resend"),
    ).toBeVisible({ timeout: 70000 });
    await otpDetect(page);
});

test("Validation Same UserId", async ({ page }) => {

    await page.waitForLoadState("networkidle");
    await page.getByTestId("setting_language").getByText("ไทย").click();
    await page
        .locator(".go5-dropdown-item-body > .go5-dropdown-item-body")
        .first()
        .click();

    await page.getByText("Others").click();
    await page
        .getByTestId("input_textfield_input_register_company_name")
        .fill("OhmCom1");
    await page.getByText("Number of employee?*").click();
    await page
        .locator(".go5-dropdown-item-body > .go5-dropdown-item-body")
        .first()
        .click();
    await page.getByText(" Your business type*").click();

    await page
        .locator("div")
        .filter({ hasText: /^Wholesale$/ })
        .nth(1)
        .click();
    await page.getByTestId("input_textfield_input_registration_email").click();
    await page
        .getByTestId("input_textfield_input_registration_email")
        .fill("cojit20878@marvetos.com");
    await page
        .getByTestId("input_textfield_input_register_first_name")
        .fill("Pongsakorn");
    await page.getByTestId("input_textfield_input_register_last_name").click();
    await page
        .getByTestId("input_textfield_input_register_last_name")
        .fill("Chartpram");
    await page.getByRole("textbox", { name: "Mobile Number*" }).click();
    await page
        .getByRole("textbox", { name: "Mobile Number*" })
        .fill("0994273939");
    await page.getByText("Redeem a promo code").click();
    await page.getByTestId("input_text_registration_coupon_code").click();
    await page
        .getByTestId("input_text_registration_coupon_code")
        .fill("FREE15DAY");
    await page.getByTestId("input_checkbox_registration_checkbox").check();
    const tryForFreeBtn = page.getByTestId(
        "button_submit_registration_try_for_free",
    );
    await tryForFreeBtn.waitFor();
    await expect(tryForFreeBtn).toBeDisabled();
});
