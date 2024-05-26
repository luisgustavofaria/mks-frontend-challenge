/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    '**/__tests__/**/*.test.ts?(x)', // Match test files
    '**/?(*.)+(spec|test).ts?(x)', // Match TypeScript test files
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
}
