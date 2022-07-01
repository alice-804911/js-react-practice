import Pagination from './Pagination';
import ListGroup from './ListGroup';
import KeywordsTag from './KeywordsTag';

function ThemeGroup() {
	return (
		<section className="c-themeGroup">
			<div className="c-themeGroup__left">
				<div className="c-themeGroup__tag">主題推薦</div>
				<div className="c-themeGroup__info">
					<h1 className="c-themeGroup__title">3C 電競年中戰</h1>
					<ul className="o-keywords">
						<KeywordsTag />
						<KeywordsTag />
						<KeywordsTag />
					</ul>
				</div>
				<div className="c-themeGroup__banner">
					<img src="https://picsum.photos/720/1192" alt="主打推薦Banner" />
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