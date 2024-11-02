/** @type {import('jest').Config} */

const config = {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",
    "^src/(.*)$": "<rootDir>/src/$1",
    "^swiper$": "<rootDir>/node_modules/swiper/swiper.min.js",
    "^swiper/react$": "<rootDir>/node_modules/swiper/swiper-react.mjs",
    "^swiper/css$": "<rootDir>/__mocks__/styleMock.js",
    "^swiper/css/navigation$": "<rootDir>/__mocks__/styleMock.js",
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts",
    "!src/**/index.ts",
    "!src/**/*.{spec,test}.{js,jsx,ts,tsx}",
    "!**/node_modules/**",
    "!**/vendor/**",
    "!**/dist/**",
    "!**/build/**",
    "!vite.config.ts",
    "!**/coverage/**",
  ],
  coveragePathIgnorePatterns: ["/node_modules/", "jest.setup.ts", "vite-env.d.ts"],
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 60,
      lines: 60,
      statements: 60,
    },
  },
  transform: {
    "^.+\\.tsx?$": "babel-jest",
    // "^.+\\.tsx?$": "ts-jest",
  },
  transformIgnorePatterns: ["node_modules/(?!(swiper|swiper/react)/)"],

};

module.exports = config;
