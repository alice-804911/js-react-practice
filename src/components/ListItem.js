import { useState, useEffect } from 'react';
import renderSwitchTypeUrl from '../utils';
// import { dataRight } from '../data';

function ListItem({ dataGroupRight }) {
	const [thirdList, setThirdList] = useState([]);
	useEffect(() => {
		dataGroupRight.forEach((item) => {
			if (item.Id >= 7 && item.Id <= 24) {
				setThirdList((prev) => [...prev, item])
			}
		})
		// console.log(count)
	}, [dataGroupRight]);
	return (
		<ul className="c-listGroup__list">
			{thirdList.map((item) => (
				<li className="c-listGroup__item">
					<div className="o-productInfo">
						<a href={item.ExtraData.ElementType === 'Url' ? item.Link.Url : renderSwitchTypeUrl(item.ExtraData.ElementType)} alt="prodlink">
							<img src={`https://cs-a.ecimg.tw` + item.Img.Src} alt="商品圖" className="o-productInfo__img" />
							<h3 className="o-productInfo__title">{item.Link.Text}</h3>
							<div className="o-productInfo__price">${item.Link.Text1}</div>
						</a>
					</div>
				</li>
			))}
		</ul>
	)
}

// function ListItem() {
// 	return (
// 		<li className="c-listGroup__item">
// 			<div className="o-productInfo">
// 				<a href="http://" alt="prodlink">
// 					<img src={"https://cs-a.ecimg.tw" + dataRight[1].Img.Src} alt="商品圖" className="o-productInfo__img" />
// 					<h3 className="o-productInfo__title">{dataRight[1].Link.Text}</h3>
// 					<div className="o-productInfo__price">${dataRight[3].Link.Text1}</div>
// 				</a>
// 			</div>
// 		</li>
// 	)
// }
// function ListItem() {
// 	const datalist = dataRight.map((data) => {
// 		return (
// 			<li className="c-listGroup__item">
// 				<div className="o-productInfo">
// 					<a href="http://" alt="prodlink">
// 						<img src={`https://cs-a.ecimg.tw${data.Img.Src}`} alt="商品圖" className="o-productInfo__img" />
// 						<h3 className="o-productInfo__title">{data.Link.Text}</h3>
// 						<div className="o-productInfo__price">${data.Link.Text1}</div>
// 					</a>
// 				</div>
// 			</li>
// 		)
// 	});
// 	return datalist;
// }

export default ListItem;