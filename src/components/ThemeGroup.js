import { useState, useEffect } from 'react';
import renderSwitchTypeUrl from '../utils';

const ThemeGroup = ({ dataGroup }) => {

	const [firstInfo, setFirstInfo] = useState({Link:{Text:'', Title:'', Background:''},Img:{Src:'', Text:''}});
	const [secondList, setSecondList] = useState([]);
	const [thirdList, setThirdList] = useState([]);
	const [thirdGroupItems, setThirdGroupItems] = useState([]);
	const [page, setPage] = useState(1);
	// 設定每次頁面切換數量
	const thirdListPerPage = 6;

	useEffect(() => {
		dataGroup.forEach(item => {
			if (item.Id === 1) {
				setFirstInfo({ ...item })
			} 
			if (item.Id >= 2 && item.Id <= 6) {
				setSecondList((prev) => [...prev,item])
			}
		})
		// 過濾item : 大於或等於Id 7之後的items列入setsetThirdGroupItems，也就是Id 7 ~ Id 24
		setThirdGroupItems(dataGroup.filter(item => item.Id >= 7))
	}, [dataGroup]);

	useEffect(() => {
		// page 起始點 : 頁數減掉 1 再 * 每頁的數量(thirdListPerPage = 6)
		const startIndex = (page - 1) * thirdListPerPage
		// thirdGroupItems所有24 items做分割，從起始點startIndex開始加上每頁顯示items數量
		setThirdList(thirdGroupItems.slice(startIndex, startIndex + thirdListPerPage))
	}, [thirdGroupItems, page]);

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
							<li className="c-listGroup__item" key={item.Id}>
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