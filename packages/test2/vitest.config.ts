import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    include: [
      "./src/**/*.test.{ts,js}",
      "./test/**/*.test.{ts,js}",
    ],
    name: "browser",
    browser: {
      enabled: true,
      name: "chromium",
      headless: false,
      provider: "playwright",
      isolate: true,
      slowHijackESM: false,
      providerOptions: {
        launch: {
          args: ["--ignore-certificate-errors"],
        },
      },
    },
    open: false,
    testTimeout: 50000,
  },
});
