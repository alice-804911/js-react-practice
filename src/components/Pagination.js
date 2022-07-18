import { useState } from 'react';



function Pagination() {
	const [page, setPage] = useState(1);
	return (
		<div className="c-pagination">
			<div className="c-pagination__icon c-pagination__icon--disable">
				<span className="o-icon o-icon__arrow o-icon__arrow--left"></span>
			</div>
			<div className="c-pagination__pages"><a href="http://" className="c-pagination__pages--active">{page}</a> / <a href="http://">3</a></div>
			<div className="c-pagination__icon">
				<span className="o-icon o-icon__arrow o-icon__arrow--right" onClick={() => setPage(page > 2 ? page : page + 1)}></span>
			</div>
		</div>
	)
}

export default Pagination;