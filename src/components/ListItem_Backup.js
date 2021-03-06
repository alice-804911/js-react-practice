import { dataRight } from '../data';

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
function ListItem() {
	const datalist = dataRight.map((data) => {
		return (
			<li className="c-listGroup__item">
				<div className="o-productInfo">
					<a href="http://" alt="prodlink">
						<img src={`https://cs-a.ecimg.tw${data.Img.Src}`} alt="商品圖" className="o-productInfo__img" />
						<h3 className="o-productInfo__title">{data.Link.Text}</h3>
						<div className="o-productInfo__price">${data.Link.Text1}</div>
					</a>
				</div>
			</li>
		)
	});
	return datalist;
}

// function ListItem() {
// 	dataRight.map(data => {
// 		return (
// 			<li className="c-listGroup__item">
// 				<div className="o-productInfo">
// 					<a href="http://" alt="prodlink">
// 						<img src={`https://cs-a.ecimg.tw${data.Img.Src}`} alt="商品圖" />
// 						<h3 className="o-productInfo__title">{data.Link.Text}</h3>
// 						<div className="o-productInfo__price">${data.Link.Text1}</div>
// 					</a>
// 				</div>
// 			</li>
// 		)
// 	})
// }

export default ListItem;