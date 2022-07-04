import ListItem from './ListItem';

const numbers = [1, 2, 3, 4, 5, 6];
const listItems = numbers.map((number) =>
	<ListItem value = {number} kay = {number.toString()} />
);

function ListGroup() {
	return (
		<div className="c-listGroup">
			<ul className="c-listGroup__list">
				{listItems}
			</ul>
		</div>
	)
}

export default ListGroup;
