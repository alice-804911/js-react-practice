import ThemeGroup from './ThemeGroup';
import { useState, useEffect } from 'react';
import axios from 'axios';

// 抓取線上資料
function Content() {
	const [dataGroup, setDataGroup] = useState([]);
	useEffect(() => {
		getAllDatas();
	}, []);

	const getAllDatas = () => {
		axios.get('/index/stage/v1/data&27655702')
			.then(response => {
				// handle sucess
				const allDatas = response.data.window2.Blocks[3].Nodes;
				setDataGroup(allDatas);
			})
			.catch(error => {
				// handle error
				console.log(error);
			})
			.then(() => {
				// always executed
			});
	}

	return (
		<div className="c-content">
			<ThemeGroup dataGroup={dataGroup} />
			<ThemeGroup dataGroup={dataGroup} />
		</div>
	)
}
export default Content;