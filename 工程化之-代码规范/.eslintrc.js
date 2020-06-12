module.exports = {
  // 为我们提供运行环境，一个环境定义了一组预定义的全局变量
  env: {
    browser: true,
    es6: true,
  },
  // 继承一组规则集。
  extends: ["plugin:react/recommended", "plugin:prettier/recommended"],
  // 自定义全局变量
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  // ESLint 默认使用Espree作为其解析器，你可以在配置文件中指定一个不同的解析器
  //parser: "@typescript-eslint/parser",
  // 配置解析器支持的语法
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2019,
    sourceType: "module",
  },
  // ESLint 支持使用第三方插件。在使用插件之前，你必须使用 npm 安装它。
  // 在配置文件里配置插件时，可以使用 plugins 关键字来存放插件名字的列表。插件名称可以省略 eslint-plugin- 前缀。
  plugins: [
    "react",
    "react-hooks",
    // "@typescript-eslint"
  ],
  //配置规则，这里定义的规则会覆盖 extends 的规则。如果觉得本包开启的某条规则过于严格，你可以暂时在这里将其关闭。
  rules: {
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
};
