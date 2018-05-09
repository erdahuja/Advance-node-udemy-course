// const puppeteer = require("puppeteer");
// const Page = require("./helpers/page");

// let page;
// beforeEach(async () => {
//   page = await Page.build();
//   await page.goto("http://localhost:3000");
// });

// afterEach(async () => {
//   await page.close();
// });

// test("clicking log in button", async () => {
//   await page.click(".right a");
//   const url = await page.url();
//   expect(url).toMatch("accounts.google.com");
// });

// test("should login", async () => {
//   await page.login();
//   await page.waitForSelector(
//     "#root > div > div > nav > div > ul > li:nth-child(2) > a"
//   );
//   const text = await page.getContentsOf("#root > div > div > nav > div > ul > li:nth-child(2) > a");
//   expect(text).toEqual("Logout");
// });
