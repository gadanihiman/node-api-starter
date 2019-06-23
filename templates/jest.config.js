module.exports = {
    verbose: true,
    coverageThreshold: {
      global: {
        branches: 90,
        functions: 90,
        lines: 90,
        statements: 90
      }
    },
    coverageReporters: ['json', 'lcov', 'text', 'clover', 'text'],
    collectCoverageFrom: ['src/**/*.js', 'src/*.js']
  };
  