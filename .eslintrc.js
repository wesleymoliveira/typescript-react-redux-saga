module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  globals: {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
},
  extends: [
    //"@typescript-eslint",
    'plugin:react/recommended',
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    //'airbnb',
    "plugin:@typescript-eslint/recommended"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    "react-hooks",
    "prettier",
    '@typescript-eslint',
  ],
  rules: {
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "prettier/prettier": "error",
    "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/jsx-filename-extension": [1, {"extensions":[".tsx"]
   }],
      "import/prefer-default-export": "off",
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          "ts": "never",
          "tsx": "never"
        }
      ]
  },
  "settings": {
    "import/resolver": {
      "typescript": {}
    }
  }
};
