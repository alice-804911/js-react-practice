
const renderSwitchTypeUrl = (key) => {
	switch (key) {
		case 'Prod':
			return 'https://24h.pchome.com.tw/prod/DAAK90-A900AD51J';
		case 'Store':
			return 'https://24h.pchome.com.tw/store/DAAK90-A900AD51J';
		case 'Search':
			return 'https://shopping.pchome.com.tw/';
		default:
			return '';
	}
}
export default renderSwitchTypeUrl