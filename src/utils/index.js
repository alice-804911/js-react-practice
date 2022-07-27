

const renderSwitchTypeUrl = (key) => {
	switch (key) {
		case 'Prod':
			return 'https://24h.pchome.com.tw/prod/';
		case 'Store':
			return 'https://24h.pchome.com.tw/store/';
		case 'Search':
			return 'https://shopping.pchome.com.tw/';
		default:
			return '';
	}
}
export default renderSwitchTypeUrl