function Pagination() {
	return (
		<div className="c-pagination">
			<div className="c-pagination__icon c-pagination__icon--disable">
				<span className="o-icon o-icon__arrow o-icon__arrow--left"></span>
			</div>
			<div className="c-pagination__pages"><a href="http://" className="c-pagination__pages--active">1</a> / <a href="http://">3</a></div>
			<div className="c-pagination__icon">
				<span className="o-icon o-icon__arrow o-icon__arrow--right"></span>
			</div>
		</div>
	)
}

export default Pagination;