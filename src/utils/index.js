const renderSwitchTypeUrl = (key) => {
	switch (key) {
		case 'Prod':
			return '';
		case 'Store':
			return '';
		case 'Search':
			return 'https://shopping.pchome.com.tw/';
		default:
			return '';
	}
}
export default renderSwitchTypeUrl