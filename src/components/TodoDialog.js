import * as React from 'react';
import * as R from 'ramda';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

export default class TodoDialog extends React.PureComponent {
	componentWillReceiveProps(nextProps){
		const { dialog, actions } = nextProps;
		const { title, description, isValid, isEditing, editingTodoId } = dialog;
		const { closeDialog, addNewTodo, saveTodo } = actions;

		if (isValid) {
			if (isEditing){
				saveTodo(title, description, editingTodoId);
			} else {
				addNewTodo(title, description);
			}
			closeDialog();
		}
	}

	renderButtons = () => {
		const { dialog: {isEditing}, actions } = this.props;
		const { closeDialog, validateFields } = actions;

		return [
			<FlatButton
				key="cancel-button"
				label="Cancel"
				primary={true}
				onClick={closeDialog}
			/>,
			<FlatButton
				key="add-button"
				label={isEditing ? "Save" : "Add"}
				primary={true}
				keyboardFocused={true}
				onClick={validateFields}
			/>,
		]
	}

	render(){
		const { dialog, actions: {updateTextField} } = this.props;
		const { title = '', description = '', isEditing, isDialogOpen = false, validation = {} } = dialog;

		return (
			<Dialog
				actions={this.renderButtons()}
				title={isEditing ? "Edit Todo" : "New Todo"}
				modal={false}
				open={isDialogOpen}
			>
				<TextField
					hintText="Add Todo Title"
					floatingLabelText="Todo Title"
					errorText={R.path(['title', 'errMsg'], validation)}
					name="title"
					value={title}
					onChange={(e, newValue) => updateTextField(e.target.name, newValue)}
				/>
				<br/>
				<TextField
					hintText="Add Todo Description"
					floatingLabelText="Todo Description"
					errorText={R.path(['description', 'errMsg'], validation)}
					name="description"
					value={description}
					onChange={(e, newValue) => updateTextField(e.target.name, newValue)}
				/>
			</Dialog>
		)
	}
}

