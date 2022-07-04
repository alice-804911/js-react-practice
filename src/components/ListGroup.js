import ListItem from './ListItem';

const listItems = [...Array(6)].map((_, number) => (
	<ListItem value = {number} kay = {number.toString()} />
));

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
