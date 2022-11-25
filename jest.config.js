// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  globals: {
    'ts-jest': { isolatedModules: true },
  },
  testEnvironment: 'jest-environment-jsdom',
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/config/jest.setup.js'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/docs/', '/stats/'],
  testRegex: '/__tests__/.*\\.(test|spec)\\.[jt]sx?$',
  moduleDirectories: ['node_modules', '<rootDir>/'],
  snapshotSerializers: ['@emotion/jest/serializer'],
  modulePaths: ['./src'],
  moduleNameMapper: {
    '^components(.*)$': '<rootDir>/src/components/$1',
    '^pages(.*)$': '<rootDir>/src/pages/$1',
    '^styles(.*)$': '<rootDir>/src/styles/$1',
    '^utils(.*)$': '<rootDir>/src/utils/$1',
    '^containers(.*)$': '<rootDir>/src/containers/$1',
  },
  collectCoverageFrom: ['src/**/*.[jt]sx'],
  coveragePathIgnorePatterns: ['.styles.[jt]sx', 'pages'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
}

module.exports = createJestConfig(customJestConfig)
