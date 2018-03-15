import * as React from 'react';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

export default class NewTodoDialog extends React.PureComponent {
	renderButtons = () => {
		const { dialog, actions } = this.props;
		const { title, description, isEditing, editingTodoId} = dialog;
		const { closeDialog, addNewTodo, saveTodo } = actions;
		const addTodoAndCloseDialog = () => {
			if (isEditing){
				saveTodo(title, description, editingTodoId);
			} else {
				addNewTodo(title, description);
			}
			closeDialog();
		};

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
				onClick={addTodoAndCloseDialog}
			/>,
		]
	}

	render(){
		const { dialog, actions: {updateTextField} } = this.props;
		const { title, description, isEditing, isDialogOpen = false} = dialog;

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
					name="title"
					value={title}
					onChange={(e, newValue) => updateTextField(e.target.name, newValue)}
				/>
				<br/>
				<TextField
					hintText="Add Todo Description"
					floatingLabelText="Todo Description"
					name="description"
					value={description}
					onChange={(e, newValue) => updateTextField(e.target.name, newValue)}
				/>
			</Dialog>
		)
	}
}

