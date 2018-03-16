import * as React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import Edit from 'material-ui/svg-icons/editor/mode-edit';
import Remove from 'material-ui/svg-icons/action/delete';

export default class TodoList extends React.PureComponent {
    renderTodos = () => {
        const {todos, actions} = this.props;
        const {removeTodo, markTodo, editTodo} = actions;
        const sortedTodos = todos.sort((a, b) => +(a.title > b.title) || +(a.title === b.title) - 1).reverse();
        const todoList = sortedTodos.map((todo, i) => {
            const {title, description, isDone} = todo;
            const rightButtons = (
                <div>
                    <IconButton onClick={() => editTodo(title, description, i)}><Edit /></IconButton>
                    <IconButton onClick={() => removeTodo(i)}><Remove /></IconButton>
                </div>
            );

            return (
                <ListItem
                    key={`todo-${title}-${i}`}
                    className={isDone ? 'list-item-checked' : ''}
                    primaryText={title}
                    secondaryText={description}
                    leftCheckbox={ <Checkbox checked={isDone} onCheck={() => markTodo(i)} /> }
                    rightIconButton={rightButtons}
                />
            )
        });

        return todoList.length ? todoList : <ListItem primaryText='There is no todos' disabled />
    }

    render(){
        return (
            <List>
                <Subheader>Todo List</Subheader>
                <Divider/>
                {this.renderTodos()}
            </List>
        );
    }
}