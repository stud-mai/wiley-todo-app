import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from './components/Header';
import TodoList from './components/TodoList';
import NewTodoDialog from './components/NewTodoDialog';
import Divider from 'material-ui/Divider';
import * as actions from './actions';

const App = (props) => {
	const {dialog, todos, actions} = props;
	const {isDialogOpen, title, description} = dialog;

	return (
		<div>
			<Header addNewTodo={actions.openDialog} />
			<Divider/>
			<TodoList
				todos={todos}
				actions={actions}
			/>
			<NewTodoDialog
				isOpen={isDialogOpen}
				title={title}
				description={description}
				actions={actions}
			/>
		</div>
	);
}

const mapStateToProps = (state) => ({...state});
const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators({...actions}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
