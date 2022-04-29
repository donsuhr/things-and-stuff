module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.eslint.json',
    },
    env: {
        jest: true,
        browser: true,
        node: true,
    },
    plugins: ['@typescript-eslint'],
    extends: ['airbnb-base', 'airbnb-typescript/base', 'prettier'],
    rules: {
        'import/prefer-default-export': 'off',
        'no-plusplus': 'off',
    },
};
