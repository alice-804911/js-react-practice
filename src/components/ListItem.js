const data = {
	'prodLink': 'https://24h.pchome.com.tw/',
	'img': 'http://ecimg.dev.mypchome.com.tw/items/DSAACRA9006L7UM/000007_1654574851.jpg',
	'title': '羅技 G913 電競鍵盤 羅技 G913 電競鍵盤 羅技 G913 電競鍵盤',
	'price': '$1111'
}

function ListItem() {
	return (
		<li className="c-listGroup__item">
			<div className="o-productInfo">
				<a href={data.prodLink} alt="prodlink">
					<img src={data.img} alt="商品圖" className="o-productInfo__img" />
					<h3 className="o-productInfo__title">{data.title}</h3>
					<div className="o-productInfo__price">{data.price}</div>
				</a>
			</div>
		</li>
	)
}

export default ListItem;