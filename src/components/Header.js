import * as React from 'react';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const Header = (props) => {
    return (
        <Toolbar>
			<ToolbarGroup>
				<ToolbarTitle text="Add New Todo" />
			</ToolbarGroup>
			<ToolbarGroup>
				<FloatingActionButton
					mini={true}
					onClick={props.addNewTodo}
				>
				<ContentAdd />
				</FloatingActionButton>
			</ToolbarGroup>
        </Toolbar>
    )
};

export default Header;