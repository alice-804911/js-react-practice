import ThemeGroup from './ThemeGroup';
import { data } from '../data';

const axios = require('axios').default;
axios.get('/index/stage/v1/data&27655702')
	.then(function(response){
		// handle sucess
		console.log(response.data.window1.Blocks[0].Nodes);
	})
	.catch(function(error){
		// handle error
		console.log(error);
	})
	.then(function(){
		// always executed
	});

	
	
function Content() {

	return (
		<div className="c-content">
			<ThemeGroup dataGroup={data.window1.Blocks[0].Nodes} />
			<ThemeGroup dataGroup={data.window1.Blocks[0].Nodes} />
		</div>
	)
}
export default Content;