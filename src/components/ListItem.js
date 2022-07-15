import { useState, useEffect } from 'react';
// import { dataRight } from '../data';

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
						<a href={item.Link.Url} alt="prodlink">
							<img src={"https://cs-a.ecimg.tw" + item.Img.Url} alt="商品圖" className="o-productInfo__img" />
							<h3 className="o-productInfo__title">111</h3>
							<div className="o-productInfo__price">$</div>
						</a>
					</div>
				</li>
			))}
		</ul>
	)
}

export default ListItem;