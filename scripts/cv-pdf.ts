import { chromium } from "playwright-core";
import { homedir } from "node:os";
import { mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";

const documents = [
  { route: "/cv/", file: "cv-sylvain-rougie.pdf", singlePage: true },
  { route: "/cv-ats/", file: "cv-sylvain-rougie-ats.pdf", singlePage: false },
  { route: "/en/cv/", file: "en/cv-sylvain-rougie-en.pdf", singlePage: true },
  { route: "/en/cv-ats/", file: "en/cv-sylvain-rougie-en-ats.pdf", singlePage: false },
];
const executablePath =
  process.env.CHROME_PATH ?? `${homedir()}/.cache/ms-playwright/chromium-1234/chrome-linux64/chrome`;

const server = Bun.serve({
  port: 0,
  async fetch(request) {
    const path = new URL(request.url).pathname;
    const file = Bun.file(join("dist", path.includes(".") ? path : join(path, "index.html")));
    return (await file.exists()) ? new Response(file) : new Response("Not found", { status: 404 });
  },
});

try {
  const browser = await chromium.launch({ executablePath });
  for (const { route, file, singlePage } of documents) {
    const page = await browser.newPage();
    await page.goto(`http://localhost:${server.port}${route}`, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    if (singlePage) {
      const overflow = await page.$eval(".cv main", (el) => el.scrollHeight - el.clientHeight);
      if (overflow > 0) console.warn(`${file} overflows the A4 page by ${overflow}px`);
    }
    const output = join("public", file);
    await mkdir(dirname(output), { recursive: true });
    await page.pdf({ path: output, format: "A4", printBackground: true, preferCSSPageSize: true, tagged: true });
    await Bun.write(join("dist", file), Bun.file(output));
    console.log(`Wrote ${output}`);
  }
  await browser.close();
} finally {
  server.stop(true);
}
