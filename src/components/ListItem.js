import { dataRight } from '../data';

function ListItem() {
	return (
		<li className="c-listGroup__item">
			<div className="o-productInfo">
				<a href="http://" alt="prodlink">
					<img src={"https://cs-a.ecimg.tw" + dataRight[1].Img.Src} alt="商品圖" className="o-productInfo__img" />
					<h3 className="o-productInfo__title">{dataRight[1].Link.Text}</h3>
					<div className="o-productInfo__price">$1111</div>
				</a>
			</div>
		</li>
	)
}

export default ListItem;