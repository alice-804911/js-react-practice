import { useState, useEffect } from 'react';
import Pagination from './Pagination';
import ListGroup from './ListGroup';
import renderSwitchTypeUrl from '../utils';
// import KeywordsTag from './KeywordsTag';

const ThemeGroup = ({ dataGroup }) => {

	const [firstInfo, setFirstInfo] = useState({Link:{Text:'', Text2:'', Background:''},Img:{Src:'', Text:''}});
	const [secondList, setSecondList] = useState([]);
	// const [thirdList, setThirdList] = useState([]);
	
	// const [count,setCount] = useState(1);
	useEffect(() => {

		dataGroup.forEach((item) => {
			if (item.Id === 1) {
				setFirstInfo({ ...item })
			} 
			if (item.Id >= 2 && item.Id <= 6) {
				setSecondList((prev)=>[...prev,item])
			} 
		//  if (item.Id >= 7 && item.Id <= 24) {
		// 		setThirdList({ ...item })
		// }
		})
		// console.log(count)
	}, [dataGroup]);
	console.log(secondList);
	
// const b={url:123,name:666};
// Object.keys(b).map((item)=>{

// })

const b = true;
console.log(b?'ok':"no");

	return (
		<section className="c-themeGroup">
			<div className="c-themeGroup__left" style={{backgroundColor:firstInfo.Link.Background}}>
				<div className="c-themeGroup__tag">主題推薦</div>
				<div className="c-themeGroup__info">
					<h1 className="c-themeGroup__title">{firstInfo.Link.Text2}</h1>
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
				<ListGroup />
				<Pagination />
			</div>
		</section>
	)
}
export default ThemeGroup;