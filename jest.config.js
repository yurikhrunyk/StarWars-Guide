module.exports = {
  testEnvironment: "jsdom",
  preset: "ts-jest",
  globals: {
    "ts-jest": {
      isolatedModules: true,
    },
  },
  rootDir: "src",
  collectCoverageFrom: ["<rootDir>/**/*.{js,jsx,ts,tsx}"],
  coverageDirectory: "jest-coverage",
  transform: {
    "^.+\\.(ts|tsx|js|jsx)?$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|svg|css|less|scss)$": "<rootDir>/__jest__/fileMock.js",
  },
  timers: "real",
  setupFiles: ["<rootDir>/src/setupTests.ts"],
};

// "jest": {
//     "testEnvironment": "jsdom",
//     "preset": "ts-jest",
//     "rootDir": "src",
//     "collectCoverageFrom": [
//       "<rootDir>/**/*.{js,jsx,ts,tsx}"
//     ],
//     "coverageDirectory": "jest-coverage",
//     "transform": {
//       "^.+\\.tsx?$": "ts-jest"
//     },
//     "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
//     "moduleFileExtensions": [
//       "ts",
//       "tsx",
//       "js",
//       "jsx",
//       "json",
//       "node"
//     ],
//     "moduleNameMapper": {
//       "\\.(jpg|jpeg|png|svg|css|less|scss)$": "<rootDir>/__jest__/fileMock.js"
//     }
//   }
