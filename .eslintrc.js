module.exports = {
    env: {
        "browser": true,
        "es6": true
    },
    extends: ["plugin:react/recommended", "standard"],
    globals: {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    plugins: ["react", "@typescript-eslint"],
    rules: {
        "no-duplicate-imports": 0,
        "semi": 0,
        "no-tabs": 2,
        "indent": [2, 2],
        "no-undef": 0,
        "quotes": 0,
        "jsx-quotes": [2, "prefer-single"],
        "space-before-function-paren": 0,
        "no-trailing-spaces": 0
    }
}
