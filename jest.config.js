module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    testMatch: ["**/__tests__/**/*.+(js)", "**/?(*.)+(spec|test).+(ts)"],
    transform: {
      "^.+\\.(ts|tsx)$": "ts-jest",
    },
  };