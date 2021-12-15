import React from 'react'
import { connect } from 'react-redux'
import { mul, div } from './redux/actions/actions'
class Counter extends React.Component {
	render() {
		return (
			<div style={{ border: '1px solid #ccc', padding: '10px' }}>
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
		onMul: () => dispatch(mul()),
		onDiv: () => dispatch(div()),
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
