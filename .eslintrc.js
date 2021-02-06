module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	parserOptions: {
		parser: 'babel-eslint'
	},
	extends: [
		'@nuxtjs',
		'plugin:nuxt/recommended'
	],
	plugins: [],

	// add your custom rules here
	rules: {
		camelcase: 0,
		semi: [2, 'always'],
		indent: [2, 'tab'],
		'no-tabs': 0,
		'no-trailing-spaces': ['error', {skipBlankLines: true}],
		'padded-blocks': ['error', {classes: 'always'}],
		curly: ['error', 'multi-line'],
		'vue/html-indent': ['error', 'tab', {
			attribute: 1,
			baseIndent: 1,
			closeBracket: 0,
			alignAttributesVertically: true,
			ignores: []
		}],
		'vue/html-self-closing': ['error', {html: {void: 'always'}}],
		'vue/singleline-html-element-content-newline': 'off',
		'vue/multiline-html-element-content-newline': 'off'
	}
};
