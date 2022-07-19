import ListItem from './ListItem';
import { data } from '../data';

function ListGroup() {
	return (
		<div className="c-listGroup">
			<ListItem dataGroupRight={data} />
		</div>
	)
}

export default ListGroup;
