import { useState, useEffect } from 'react';
import renderSwitchTypeUrl from '../utils';

function ListItem({ dataGroupRight }) {
	const [thirdList, setThirdList] = useState([]);
	useEffect(() => {
		dataGroupRight.forEach((item) => {
			if (item.Id >= 7 && item.Id <= 24) {
				setThirdList((prev) => [...prev, item])
			}
		})
	}, [dataGroupRight]);
	
	return (
		<ul className="c-listGroup__list">
			{thirdList.map((item) => (
				<li className="c-listGroup__item">
					<div className="o-productInfo">
						<a href={item.ExtraData.ElementType === 'Url' ? item.Link.Url : renderSwitchTypeUrl(item.ExtraData.ElementType) + item.Link.Url} alt="prodlink">
							<img src={`https://cs-a.ecimg.tw` + item.Img.Src} alt="商品圖" className="o-productInfo__img" />
							<h3 className="o-productInfo__title">{item.Link.Text}</h3>
							<div className="o-productInfo__price">${item.Link.price}</div>
						</a>
					</div>
				</li>
			))}
		</ul>
	)
}

export default ListItem;