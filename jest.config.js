// jest.config.js
const nextJest = require('next/jest');

// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
const createJestConfig = nextJest({ 
  dir: './', 
});

/** @type {import('jest').Config} */
const customJestConfig = {
  // Runs special logic, adding more setup before each test
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  
  // If you prefer TypeScript for your setup file:
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  
  testEnvironment: 'jest-environment-jsdom',
};

// createJestConfig is exported so that it can be used by jest
module.exports = createJestConfig(customJestConfig);