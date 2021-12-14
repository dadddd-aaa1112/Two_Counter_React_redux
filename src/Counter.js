import React from 'react'
import { connect } from 'react-redux'
class Counter extends React.Component {
	render() {
		return (
			<div>
				<h1>
					Counter 2 <strong>{this.props.counter}</strong>
				</h1>
				<div>
					<button onClick={this.props.onMul}>Умножить на 2</button>
					<button onClick={this.props.onDiv}>Разделить на 2</button>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		counter: state.counter2.counter2,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onMul: () => dispatch({ type: 'MUL' }),
		onDiv: () => dispatch({ type: 'DIV' }),
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
