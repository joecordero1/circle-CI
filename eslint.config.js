module.exports = [
    {
      files: ["test/**/*.js"],
      languageOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      rules: {
        semi: "error",
        quotes: ["error", "double"],
      },
    },
  ];
  