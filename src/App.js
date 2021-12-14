import React from 'react'
import './App.scss'
import Counter from './Counter'
import { connect } from 'react-redux'

class App extends React.Component {
	render() {
		return (
			<div>
				<h1>
					Счетчик 1 <strong>{this.props.counter} </strong>
				</h1>

				<div>
					<button onClick={this.props.onAdd}>Добавить 1</button>
					<button onClick={this.props.onSub}>Отнять 1</button>
				</div>
				<Counter />
			</div>
		)
	}
}

function mapStateToProps(state) {
	console.log(state)
	return {
		counter: state.counter1.counter22,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onAdd: () => dispatch({ type: 'ADD' }),
		onSub: () => dispatch({ type: 'SUB' }),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
