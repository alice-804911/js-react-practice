import ListItem from './ListItem';
import { data } from '../data';

// const listItems = [...Array(6)].map((_, number) => (
// 	<ListItem value = {number} kay = {number.toString()} />
// ));

function ListGroup() {
	return (
		<div className="c-listGroup">
			<ListItem dataGroupRight={data} />
		</div>
	)
}

export default ListGroup;
