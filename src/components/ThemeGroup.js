import Pagination from './Pagination';
import ListGroup from './ListGroup';
import KeywordsTag from './KeywordsTag';
import { dataLeft } from '../data';

function ThemeGroup() {
	return (
		<section className="c-themeGroup">
			<div className="c-themeGroup__left">
				<div className="c-themeGroup__tag">主題推薦</div>
				<div className="c-themeGroup__info">
					<h1 className="c-themeGroup__title">{dataLeft.Link.Text2}</h1>
					<ul className="o-keywords">
						<KeywordsTag />
						<KeywordsTag />
						<KeywordsTag />
					</ul>
				</div>
				<div className="c-themeGroup__banner">
					<img src={dataLeft.Img.Src} alt="主打推薦Banner" />
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