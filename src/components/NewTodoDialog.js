import * as React from 'react';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

export default class NewTodoDialog extends React.PureComponent {
	renderButtons = () => {
		const { title, description, actions: {closeDialog, addNewTodo} } = this.props;
		const addTodoAndCloseDialog = () => {
			addNewTodo(title, description);
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
				label="Add"
				primary={true}
				keyboardFocused={true}
				onClick={addTodoAndCloseDialog}
			/>,
		]
	}

	render(){
		const { isOpen = false, actions: {updateTextField} } = this.props;
		return (
			<Dialog
				actions={this.renderButtons()}
				title="New Todo"
				modal={false}
				open={isOpen}
			>
				<TextField
					hintText="Add Todo Title"
					floatingLabelText="Todo Title"
					name="title"
					onChange={(e, newValue) => updateTextField(e.target.name, newValue)}
				/>
				<br/>
				<TextField
					hintText="Add Todo Description"
					floatingLabelText="Todo Description"
					name="description"
					onChange={(e, newValue) => updateTextField(e.target.name, newValue)}
				/>
			</Dialog>
		)
	}
}

