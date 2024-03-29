import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import renderSwitchTypeUrl from '../utils';

const ThemeGroup = ({dataGroup,section}) => {
	const [firstInfo, setFirstInfo] = useState(
		{Link:{Text:'', Text2:'', Background:''},Img:{Src:'', Text:''}}
		);
	const [secondList, setSecondList] = useState([]);
	const [thirdList, setThirdList] = useState([]);
	const [thirdGroupItems, setThirdGroupItems] = useState([]);
	const [sectionTab, setSectionTab] = useState([]);
	const [tabContent, setTabContent] = useState(1);
	const [page, setPage] = useState(1);
	// 設定每次頁面切換數量
	const THIRDLIST_PER_PAGE = 6;
	// 計算總頁數
	const PAGETOTAL = thirdGroupItems.length / THIRDLIST_PER_PAGE;
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
		// sectionTab
	useEffect(() => {
		section.forEach(items => {
			if (items.BlockId <= 5){
				setSectionTab((prev) => [...prev,items])
			}
		})
	}, [section]);

	useEffect(() => {
		// page 起始點 : 頁數減掉 1 再 * 每頁的數量(THIRDLIST_PER_PAGE = 6)
		const startIndex = (page - 1) * THIRDLIST_PER_PAGE
		// thirdGroupItems所有24 items做分割，從起始點startIndex開始加上每頁顯示items數量
		setThirdList(thirdGroupItems.slice(startIndex, startIndex + THIRDLIST_PER_PAGE))
	}, [thirdGroupItems, page]);
console.log(firstInfo)
	return (
		<section className="c-themeGroup">
			<div className="c-themeGroup__tabs">
				<ul className="c-themeGroup__tabsList">
					{sectionTab.map(items =>(<li><button type="button" className="c-themeGroup__tabsListTab is_active" onClick={() => setTabContent()}>{items.Nodes[0].Link.Text}</button></li>))}
				</ul>
			</div>
			<div className="c-themeGroup__left" style={{backgroundColor:firstInfo.Link.Background}}>
				<div className="c-themeGroup__tag">主題推薦</div>
				<div className="c-themeGroup__info">
					<h1 className="c-themeGroup__title">{firstInfo.Link.Text2}</h1>
					<ul className="o-keywords">
						{secondList.map(item => (
							<li className="o-keywords__tag" key={item.Key}>
								<a href={item.ExtraData.ElementType === 'Url' ? item.Link.Url : renderSwitchTypeUrl(item.ExtraData.ElementType)}>#{item.Link.Text}</a>
							</li>
						))}
					</ul>
				</div>
				<div className="c-themeGroup__banner">
					<img src={`https://fs-a.ecimg.tw` + firstInfo.Img.Src} alt="主打推薦Banner" />
				</div>
			</div>
			<div className="c-themeGroup__right">
				<div className="c-listGroup">
					<ul className="c-listGroup__list">
						{thirdList.map((item) => (
							<li className="c-listGroup__item" key={item.List}>
								<div className="o-productInfo">
									<a href={item.ExtraData.ElementType === 'Url' ? item.Link.Url : renderSwitchTypeUrl(item.ExtraData.ElementType) + item.Link.Url} alt="prodlink">
										<img src={`https://cs-a.ecimg.tw` + item.Img.Src} alt="商品圖" className="o-productInfo__img" />
										<h3 className="o-productInfo__title">{item.Link.Text}</h3>
										<div className="o-productInfo__price">${item.Link.Text1}</div>
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
					<div className="c-pagination__pages">
						<a href="http://" className="c-pagination__pages--active">{page}</a> / <a href="http://">{PAGETOTAL}</a>
					</div>
					<div className="c-pagination__icon" onClick={() => setPage(page > 2 ? page : page + 1)}>
						<span className="o-icon o-icon__arrow o-icon__arrow--right"></span>
					</div>
				</div>
			</div>
		</section>
	)
}

ThemeGroup.propTypes = {
	dataGroup: PropTypes.arrayOf(
		// .shape特定形式對象
		PropTypes.shape({
			ExtraData: PropTypes.shape({
				ElementType: PropTypes.string,
				Sort: PropTypes.number
			}),
			Id: PropTypes.number,
			Img: PropTypes.shape({
				Src: PropTypes.string
			}),
			Link: PropTypes.shape({
				Text: PropTypes.string,
				Text1: PropTypes.string,
				Url: PropTypes.string,
				Background: PropTypes.string
			})
		})
	)
};


export default ThemeGroup;