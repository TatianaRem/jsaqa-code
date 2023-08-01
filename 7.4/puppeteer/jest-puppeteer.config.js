const puppeteer = require("puppeteer");

const browserOptions = {
  launch: {
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"], //— используем максимальный размер окна браузера
  },
};

let browser;
let page;

async function setup() {
  browser = await puppeteer.launch(browserOptions.launch); //Для запуска браузера с настройками указанными выше
  page = await browser.newPage();
}

async function teardown() {
  //Функция для завершения после каждого теста
  await page.close();
  await browser.close();
}

module.exports = { setup, teardown };
