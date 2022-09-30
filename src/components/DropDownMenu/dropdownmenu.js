import React from "react";
import { Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";



const trigger = (
    <span style={{ marginTop: "2px" }}>
        <i aria-hidden="true" class="bars big icon" size="big" />
    </span>
);

const DropdownMenu = ({ loggedUser, handleLogout }) => (
    <Dropdown trigger={trigger} pointing='top left' icon={null}>
        <Dropdown.Menu>
            <Dropdown.Item text='Home' icon='gamepad' as={Link} to='/' />
            <Dropdown.Item text='About' icon='question circle' as={Link} to='/about' />
            <Dropdown.Item text='Video' icon='video' as={Link} to='/videos' />
            <Dropdown.Item text='Logout' icon='sign out' onClick={handleLogout} />
        </Dropdown.Menu>
    </Dropdown>
);

export default DropdownMenu;