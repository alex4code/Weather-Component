var React = require('react');
HTTP = require('../services/httpService');
var InputItem = require('./InputItem.jsx');
var DayItem = require('./DayItem.jsx');
var List =  require('./List.jsx');


var MainScreen = React.createClass({
	getInitialState: function () {
		return {weather: null}
	},
	componentWillMount: function (url) {
		HTTP.get(url)
			.then(function (data) {
				console.log(data);
				this.setState({weather: data});
			}.bind(this));
	},
	onSend: function () {
		var url = this.refs.input.state.value;
		console.log(url);
		componentWillMount(url);
	},

	render: function () {


		if (this.state.weather) {
			return (

				<div className="mainScreen">
					<InputItem ref="input" onClick={this.onSend}/>

					<DayItem
						city={this.state.weather.city.name}
						country={this.state.weather.city.country}
						time={this.state.weather.list[0].dt_txt.substring(11, 16)}
						temp = {this.state.weather.list[0].main.temp}
						description={this.state.weather.list[0].weather[0].description}
						icon={this.state.weather.list[0].weather[0].icon}
					    windSpeed={this.state.weather.list[0].wind.speed}
					/>
					<List arr={this.state.weather.list}/>

				</div>
			)
		}else{
			return ( <div>Sorry, something wrong</div>);
		}


	}
});


module.exports = MainScreen;


var React = require('react');
HTTP = require('../services/httpService');
var InputItem = require('./InputItem.jsx');
var DayItem = require('./DayItem.jsx');
var List =  require('./List.jsx');


var MainScreen = React.createClass({
	getInitialState: function () {
		return {weather: null}
	},
	componentWillMount: function (url) {
		if(!arguments.length){
			url="Mariupol"
		}
		HTTP.get(url)
			.then(function (data) {
				console.log(data);
				this.setState({weather: data});
			}.bind(this));
	},
	onSend: function () {
		var url = this.refs.input.state.value;
		this.componentWillMount(url);
	},
	render: function () {


		if (this.state.weather) {
			return (

				<div className="mainScreen">
					<InputItem ref="input" onClick={this.onSend}/>

					<DayItem
						city={this.state.weather.city.name}
						country={this.state.weather.city.country}
						time={this.state.weather.list[0].dt_txt.substring(11, 16)}
						temp = {this.state.weather.list[0].main.temp}
						description={this.state.weather.list[0].weather[0].description}
						icon={this.state.weather.list[0].weather[0].icon}
						windSpeed={this.state.weather.list[0].wind.speed}
					/>
					<List arr={this.state.weather.list}/>

				</div>
			)
		}else{
			return ( <div>Sorry, something wrong</div>);
		}


	}
});


module.exports = MainScreen;




