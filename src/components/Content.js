function Content() {
	return (
		<section className='c-themeCate'>
			<div className='c-themeCate__left'>
				<div className='c-themeCate__tag'>主題推薦</div>
				<div>
					<h1 className='c-themeCate__title'>3C 電競年中戰</h1>
					<ul className='o-keywords'>
						<li>#曜越電競椅</li>
					</ul>
				</div>
				<div className='c-themeCate__banner'>
					<img src="#" alt="主打推薦Banner" />
				</div>
			</div>
			<div className='c-themeCate__right'>
				<div className='c-listGroup'>
					<ul className='c-listGroup_lists'>
						<li className='c-listGroup_item'>
							<div className="o-productInfo">
								<a href="https://24h.pchome.com.tw/" alt="prodlink">
									<img src="http://ecimg.dev.mypchome.com.tw/items/DSAACRA9006L7UM/000007_1654574851.jpg" alt="商品圖" className='o-productInfo__img' />
									<h3 className='o-productInfo__title'>羅技 G913 電競鍵盤</h3>
									<div className='o-productInfo__price'>$1111</div>
								</a>
							</div>
						</li>
					</ul>
				</div>
				<div className='c-pagination'>
					<div className="c-pagination__icon">
						<span className="o-icon o-icon--arrowLeft"></span>
					</div>
					<div className="c-pagination__pages">1 / 3</div>
					<div className="c-pagination__icon">
						<span className="o-icon o-icon--arrowRight"></span>
					</div>
				</div>
			</div>
		</section>
	)
}
export default Content;