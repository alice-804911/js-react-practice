import ListItem from './ListItem';

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li>{number}</li>
);

function ListGroup() {
	return (
		<div className="c-listGroup">
			<ul className="c-listGroup__list">
				<ListItem />
				<ListItem />
				<ListItem />
				<ListItem />
				<ListItem />
				<ListItem />
			</ul>
			<ul>{listItems}</ul>
		</div>
	)
}

export default ListGroup;
