import Pagination from './Pagination';
import ListGroup from './ListGroup';
import KeywordsTag from './KeywordsTag';

const dataLeftInfo = {
	Id: 1,
	Link: {
		Text: "真該死",
		Text2: "好棒棒",
		Background: "#FF0000"
	},
	Img: {
		Src: "https://fs-a.ecimg.tw/img/h24/v1/layout/onsale/20220704/20220630160437_welcome-2-B-1000x1000.jpg",
		Text: "test",
	},
}

function ThemeGroup() {
	return (
		<section className="c-themeGroup">
			<div className="c-themeGroup__left">
				<div className="c-themeGroup__tag">{dataLeftInfo.Link.Text2}</div>
				<div className="c-themeGroup__info">
					<h1 className="c-themeGroup__title">aaa</h1>
					<ul className="o-keywords">
						<KeywordsTag />
						<KeywordsTag />
						<KeywordsTag />
					</ul>
				</div>
				<div className="c-themeGroup__banner">
					<img src="" alt="主打推薦Banner" />
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