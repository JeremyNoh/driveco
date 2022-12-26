module.exports = {
  preset: 'react-native',
  testRegex: '(.test).(tsx|ts)$',
  setupFiles: [
    './__tests__/setup.ts',
    './node_modules/react-native-gesture-handler/jestSetup.js',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  testPathIgnorePatterns: [
    './node_modules/.*',
    './__tests__/setup.ts',
    './__tests__/mocks/.*',
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/src/assets',
    '<rootDir>/src/App.tsx',
    '<rootDir>/__tests__/setup.ts',
    '<rootDir>/src/react-app-env.d.ts',
    '<rootDir>/src/index.tsx',
    '<rootDir>/src/types',
    '<rootDir>/src/i18n',
    '<rootDir>/src/translations',
    '<rootDir>/src/hooks',
    '<rootDir>/__tests__/mocks/.*',
  ],
  coverageThreshold: {
    global: {
      lines: 90,
    },
  },
  transformIgnorePatterns: ['node_modules/(?!static-container)/'],
  collectCoverageFrom: [
    './src/**',
    '!src/components/*/index.ts',
    '!src/**/*.json',
  ],
};
