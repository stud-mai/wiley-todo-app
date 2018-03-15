import * as React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import Remove from 'material-ui/svg-icons/action/delete';

export default class TodoList extends React.PureComponent {
    renderTodos = () => {
        const {todos, actions} = this.props;
        const {removeTodo, markTodo} = actions;
        //const sortedTodos = todos.sort((a, b) => +(a.value > b.value) || +(a.value === b.value) - 1).reverse();
        const todoList = todos.map((todo, i) => {
            const {title, description, isDone} = todo;
            const removeButton = <IconButton onClick={() => removeTodo(i)}><Remove /></IconButton>;

            return (
                <ListItem
                    key={`todo-${title}-${i}`}
                    className={isDone ? 'list-item-checked' : ''}
                    primaryText={title}
                    secondaryText={description}
                    onClick={()=>{}}
                    leftCheckbox={ <Checkbox checked={isDone} onCheck={() => markTodo(i)} /> }
                    rightIconButton={removeButton}
                />
            )
        });

        return todoList.length ? todoList : <ListItem primaryText='There is no todos' />
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