module.exports = {
  extends: ["react-app", "plugin:prettier/recommended"],
  rules: {
    "prettier/prettier": "error",
  },
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
};
