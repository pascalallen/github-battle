var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');
require('./index.css');

class App extends React.Component {
	render() {
		var guys = this.props.friends.filter(function(friend){
			return friend.male === true
		});
		var girls = this.props.friends.filter(function(friend){
			return friend.male !== true
		});
		return(
			<div>
				Guys
				<ul>
					{guys.map(function (friend){
						return <li key={friend.name}>{friend.name}</li> // key property is unique identifier for react to know which items have changed.
					})}
				</ul>
				Girls
				<ul>
					{girls.map(function (friend){
						return <li key={friend.name}>{friend.name}</li> // key property is unique identifier for react to know which items have changed.
					})}
				</ul>
			</div>
		)
	}
}

Badge.propTypes = {
	name: PropTypes.string.isRequired,
	male: PropTypes.bool.isRequired
}

ReactDOM.render(
	<App friends={[
		{name: 'Toni', male:false},
		{name: 'Matt', male:true},
		{name: 'Dylan', male:true},
		{name: 'James', male:true}
	]}/>, document.getElementById('app'));
