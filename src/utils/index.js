const renderSwitchTypeUrl = (key) => {
	switch (key) {
		case 'Prod':
			return '';
		case 'Store':
			return '';
		case 'Search':
			return 'https://ecshweb.pchome.com.tw/search/v3.3/?q=';
		case 'Url':
			return '';
		default:
			return '';
	}
}
export default renderSwitchTypeUrl