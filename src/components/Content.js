import ThemeGroup from './ThemeGroup';
import { data } from '../data';


function Content() {
	return (
		<div className="c-content">
			<ThemeGroup dataGroup={data.window1.Blocks[0].Nodes} />
			<ThemeGroup dataGroup={data.window1.Blocks[0].Nodes} />
		</div>
	)
}
export default Content;