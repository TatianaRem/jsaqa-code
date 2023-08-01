let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/team");
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toEqual(
      "GitHub for teams · Build like the best teams on the planet · GitHub"
    );
  });
});
test("The first link attribute", async () => {
  const actual = await page.$eval("a", (link) => link.getAttribute("href"));
  expect(actual).toEqual("#start-of-content");
}, 15000);

test("The page contains Sign in button", async () => {
  const btnSelector = ".btn-large-mktg.btn-mktg";
  await page.waitForSelector(btnSelector, {
    visible: true,
  });
  const actual = await page.$eval(btnSelector, (link) => link.textContent);
  expect(actual).toContain("Get started with Team");
}, 15000);

const { setup, teardown } = require("./jest-puppeteer.config.js");

describe("Creating account Github page tests", () => {
  beforeEach(async () => {
    await setup();
    await page.goto(
      "https://github.com/join?plan=business&ref_cta=Get%2520started%2520with%2520Team&ref_loc=team-page-footer&ref_page=%2Fteam"
    );
  });

  afterEach(async () => {
    await teardown();
  });

  test("Header with selector h1", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title3 = await page.title();
    expect(title3).toEqual("Join GitHub · GitHub");
  }, 15000);

  test("The header of verification block", async () => {
    const f4Selector = ".mb-3.f4";
    await page.waitForSelector(f4Selector, {
      visible: true,
    });
    const actual = await page.$eval(f4Selector, (link) => link.textContent);
    expect(actual).toContain("Verify your account");
  }, 15000);

  test("The using link attribute", async () => {
    const actual = await page.$eval("span", (link) =>
      link.getAttribute("class")
    );
    expect(actual).toEqual(
      "progress-pjax-loader Progress position-fixed width-full"
    );
  }, 15000);
});
