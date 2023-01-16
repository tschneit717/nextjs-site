module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    allowIndentationTabs: 0,
    "array-callback-return": 0,
    indent: ["error", 2],
    "no-tabs": 0,
    "react/prop-types": 1,
    "react/react-in-jsx-scope": "off",
  },
};
