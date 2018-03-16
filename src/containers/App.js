import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Divider from 'material-ui/Divider';
import Header from '../components/Header';
import TodoList from '../components/TodoList';
import TodoDialog from '../components/TodoDialog';
import * as actions from '../actions';

const App = (props) => {
	const {dialog, todos, actions} = props;

	return (
		<div>
			<Header addNewTodo={actions.openDialog} />
			<Divider/>
			<TodoList
				todos={todos}
				actions={actions}
			/>
			<TodoDialog
				dialog={dialog}
				actions={actions}
			/>
		</div>
	);
};

const mapStateToProps = (state) => ({...state});
const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators({...actions}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
