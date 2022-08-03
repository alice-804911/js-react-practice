import ThemeGroup from './ThemeGroup';
import { data } from '../data';


function Content() {
	return (
		<div className="c-content">
			<ThemeGroup dataGroup={data} />
			<ThemeGroup dataGroup={data} />
		</div>
	)
}
export default Content;