import { dataKeytag } from '../data';

function KeywordsTag() {
	return (
		<li className="o-keywords__tag">
			<a href="http://" alt="tags">#{dataKeytag.name}</a>
		</li>
	)
}

export default KeywordsTag;