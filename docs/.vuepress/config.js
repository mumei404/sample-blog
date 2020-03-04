module.exports = {
	title: 'test blog',
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
