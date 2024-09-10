module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  moduleFileExtensions: ["js", "json", "jsx", "node"],
  moduleNameMapper: {
    "\\.(css|scss)$": "jest-transform-stub", // Mock CSS/SCSS files if needed
  },
};
