module.exports = {
  plugins: ["react"],
  extends: ["eslint:recommended"],
  parser: 'babel-eslint',
  env: {
    node: true,
  },
  rules: {
    quotes: ["error", "single", { avoidEscape: true }],
    "comma-dangle": ["error", "always-multiline"],
  },
  settings: {
    react: {
      version: "16.4.2",
    },
  },
};
