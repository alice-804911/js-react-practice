import Pagination from "./Pagination";
import ListGroup from "./ListGroup";

function ThemeGroup() {
	return (
		<section className='c-themeGroup'>
			<div className='c-themeGroup__left'>
				<div className="c-themeGroup__main">
					<div className='c-themeGroup__tag'>主題推薦</div>
					<div>
						<h1 className='c-themeGroup__title'>3C 電競年中戰</h1>
						<ul className='o-keywords'>
							<li>#曜越電競椅</li>
						</ul>
					</div>
					<div className='c-themeGroup__banner'>
						<img src="#" alt="主打推薦Banner" />
					</div>
				</div>
			</div>
			<div className='c-themeGroup__right'>
				<ListGroup />
				<Pagination />
			</div>
		</section>
	)
}
export default ThemeGroup;