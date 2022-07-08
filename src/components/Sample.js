import React from "react";
import { useState, useEffect } from 'react';
import Banner from "../Banner";
import ProdList from "../ProdList";
import Pagination from "../Pagination";
import renderSwitchTypeUrl from '../../utils'
import './theme.scss'

const ThemeRecommend = ({ prodList }) => {

	const [firstInfo, setFirstInfo] = useState({});
	const [secondList, setSecondList] = useState([]);
	const [thirdList, setThirdList] = useState([]);
	useEffect(() => {
		prodList.forEach((item) => {
			if (item.Id === 1) {
				setFirstInfo({ ...item })
			} if (>= 2 && <= 6)
				setSecondList
		})
		if (>= 7) {

		}
	}, []);


	return (
		<div className="theme">
			123
			<div className="themeBanner" style={{ backgroundColor: firstInfo[0].BGCOLOR }}>
				<div className="banner">
					<div className="bannerTag">
						<div className="colorTag">
							<div className="colorTag--bg">
								<span className="colorTag--text">{firstInfo.COLORTAG}</span>
							</div>
						</div>
					</div>
					<div className="bannerTitle">{TITLE}</div>
					<div className="bannerInfo">
						<div className="keyword">
							<ul className="keywordList">
								{secondList.map((item) => (<li className="keywordItem" ><a href={type === 'Url' ? '' : renderSwitchTypeUrl(type)}>{TEXT}</a></li>))}

							</ul>
						</div>
						<Banner />
					</div>
				</div>
			</div>
			<div className="themeInfo">
				<ProdList />
				<Pagination />
			</div>
		</div>
	)
}

export default ThemeRecommend;