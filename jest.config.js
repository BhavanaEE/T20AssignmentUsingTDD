module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    testMatch: ["**/__tests__/**/*.+(js)", "**/?(*.)+(spec|test).+(ts|js)"],
    transform: {
      "^.+\\.(ts|tsx)$": "ts-jest",
    },
  };