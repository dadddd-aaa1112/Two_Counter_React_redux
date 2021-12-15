import React from 'react'
import './App.scss'
import Counter from './Counter'
import { connect } from 'react-redux'
import { sub, add, asyncAdd } from './redux/actions/actions'
class App extends React.Component {
	render() {
		return (
			<div className={'App'}>
				<h1>
					Счетчик 1 <strong>{this.props.counter} </strong>
				</h1>

				<div className={'Actions'}>
					<button onClick={this.props.onAdd}>Добавить 1</button>
					<button onClick={this.props.onSub}>Отнять 1</button>
				</div>

				<div className={'Actions'}>
					<button onClick={() => this.props.onAsyncAdd(100)}>
						Асинхронно добавить 100
					</button>
				</div>
				<Counter />
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		counter: state.counter1.counter22,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onAdd: () => dispatch(add()),
		onSub: () => dispatch(sub()),
		onAsyncAdd: (number) => dispatch(asyncAdd(number)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
