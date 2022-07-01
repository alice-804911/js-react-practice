function Pagination() {
	return (
		<div className="c-pagination">
			<div className="c-pagination__icon c-pagination__icon--disable">
				<span className="o-icon o-icon__arrow o-icon__arrow--left"></span>
			</div>
			<div className="c-pagination__pages"><span className="c-pagination__pages--active">1</span> / 3</div>
			<div className="c-pagination__icon">
				<span className="o-icon o-icon__arrow o-icon__arrow--right"></span>
			</div>
		</div>
	)
}

export default Pagination;