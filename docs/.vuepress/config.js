module.exports = {
	title: 'test blog',
	plugins: [
		[
			'@vuepress/google-analytics',
			{
				ga: 'UA-159680567-1'
			}
		]
	],
	themeConfig: {
		sidebar: [
			'/',
			{
				title: 'tmp',
				collapsable: false,
				children: [
					'/tmp/test',
					'/tmp/test2',
				]
			}
		]
	}
}
