import { useState, useEffect } from 'react';
import renderSwitchTypeUrl from '../utils';

const ThemeGroup = ({ dataGroup }) => {

	const [firstInfo, setFirstInfo] = useState({Link:{Text:'', Title:'', Background:''},Img:{Src:'', Text:''}});
	const [secondList, setSecondList] = useState([]);
	const [thirdList, setThirdList] = useState([]);
	const [page, setPage] = useState(1);

	useEffect(() => {

		dataGroup.forEach((item) => {
			if (item.Id === 1) {
				setFirstInfo({ ...item })
			} 
			if (item.Id >= 2 && item.Id <= 6) {
				setSecondList((prev) => [...prev,item])
			}
			if (item.Id >= 7 && item.Id <= 24) {
				setThirdList((prev) => [...prev, item])
			}
		})
	}, [dataGroup]);
	console.log(thirdList);


	return (
		<section className="c-themeGroup">
			<div className="c-themeGroup__left" style={{backgroundColor:firstInfo.Link.Background}}>
				<div className="c-themeGroup__tag">主題推薦</div>
				<div className="c-themeGroup__info">
					<h1 className="c-themeGroup__title">{firstInfo.Link.Title}</h1>
					<ul className="o-keywords">
						{secondList.map((item) => (
							<li className="o-keywords__tag" key={item.Id}>
								<a href={item.ExtraData.ElementType === 'Url' ? item.Link.Url : renderSwitchTypeUrl(item.ExtraData.ElementType)}>#{item.Link.Text}</a>
							</li>
						))}
					</ul>
				</div>
				<div className="c-themeGroup__banner">
					<img src={firstInfo.Img.Src} alt="主打推薦Banner" />
				</div>
			</div>
			<div className="c-themeGroup__right">
				<div className="c-listGroup">
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
				</div>
				<div className="c-pagination">
					<div className="c-pagination__icon" onClick={() => setPage(page < 2 ? page : page - 1)}>
						<span className="o-icon o-icon__arrow o-icon__arrow--left"></span>
					</div>
					<div className="c-pagination__pages"><a href="http://" className="c-pagination__pages--active">{page}</a> / <a href="http://">3</a></div>
					<div className="c-pagination__icon" onClick={() => setPage(page > 2 ? page : page + 1)}>
						<span className="o-icon o-icon__arrow o-icon__arrow--right"></span>
					</div>
				</div>
			</div>
		</section>
	)
}
export default ThemeGroup;