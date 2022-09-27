import React from "react";
import { Link } from "react-router-dom";
import { Header, Segment, Image, Icon } from "semantic-ui-react";
import DropdownMenu from "../DropDownMenu/dropdownmenu";


export default function PageHeader({ loggedUser, handleLogout}){
  console.log(loggedUser, "loggedUser in header");
  return (
    <Segment clearing>
    <Header as="h2" floated="right">
      <Link to="" onClick={handleLogout} style={{color:"black"}}> 
        Logout
      </Link>
    </Header>
    <DropdownMenu />
    <Header as="h2" floated="left">
      <Link to={`/${loggedUser?.username}`}>
      </Link>
    </Header>
  </Segment>
  );
}
