var import_playwright = require("@playwright/test");
(async () => {
  await import_playwright.chromium.connectOverCDP("http://localhost:9222");
})();