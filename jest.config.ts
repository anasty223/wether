export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1', // Optional: only if using path aliases
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  };