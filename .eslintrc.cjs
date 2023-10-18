module.exports = {
	overrides: [
		{
			files: ['*.astro', '*.ts', '*.tsx'],
			plugins: ['astro', 'jsx-a11y', '@typescript-eslint'],
			env: {
				node: true,
				'astro/astro': true,
				es2020: true,
			},
			parser: 'astro-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.astro'],
				sourceType: 'module',
				project: 'tsconfig.json',
			},
			rules: {
				'astro/no-conflict-set-directives': 'error',
				'astro/no-unused-define-vars-in-style': 'error',
				'no-plusplus': 'off',
				'no-underscore-dangle': 'off',
				'import/prefer-default-export': 'off',
				'prettier/prettier': 'warn',
			},
			extends: [
				'eslint:recommended',
				'plugin:@typescript-eslint/recommended',
				'plugin:@typescript-eslint/eslint-recommended',
				'plugin:@typescript-eslint/recommended-requiring-type-checking',
				'plugin:prettier/recommended',
				'plugin:jsx-a11y/recommended',
			],
		},
		{
			files: ['**/*.astro/*.tsx', '*.astro/*.tsx'],
			env: {
				browser: true,
				es2020: true,
			},
			extends: ['plugin:jsx-a11y/recommended'],
			parserOptions: {
				sourceType: 'module',
			},
			rules: {
				'jsx-a11y/rule-name': 2,
			},
		},
		{
			files: ['*.mjs'],
			env: {
				browser: true,
				es2020: true,
			},
			extends: ['plugin:jsx-a11y/recommended'],
			parser: 'astro-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.astro'],
				sourceType: 'module',
			},
			rules: {
				'no-import': 'off',
			},
		},
	],
};
