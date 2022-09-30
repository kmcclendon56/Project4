import React from "react";
import { Link } from "react-router-dom";
import { Header, Segment } from "semantic-ui-react";
import DropdownMenu from "../DropDownMenu/dropdownmenu";



export default function PageHeader({ loggedUser, handleLogout }) {
  console.log(loggedUser, "loggedUser in header");
  return (
    <>
    <h1 style={{color:'white', textAlign:'center', fontSize:'50px'}}>VonTiban</h1>
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
  </>
  );
}
