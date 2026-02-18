import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.recommendedTypeChecked,
	{
		languageOptions: {
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
		rules: {
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					caughtErrorsIgnorePattern: '^_',
				},
			],
			'no-unused-vars': 'off', // Turn off base rule as it conflicts with TypeScript version
		},
	},
	{
		files: ['**/*.test.ts', '**/*.spec.ts'],
		...tseslint.configs.disableTypeChecked,
	},
	{
		ignores: ['dist/**', 'docs/**', 'node_modules/**', '*.config.js'],
	}
);
