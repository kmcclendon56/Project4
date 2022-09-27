import React from "react";
import { Link } from "react-router-dom";
import { Header, Segment, Image, Icon } from "semantic-ui-react";

export default function PageHeader({ loggedUser, handleLogout }) {
  console.log(loggedUser, "loggedUser in header");
  return (

      <Header as="h2" floated="right">
       <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
              aria-expanded="false"></a>
            <ul class="dropdown-menu">
              <Link><a class="dropdown-item" to="/about">About</a></Link>
              <Link><a class="dropdown-item" to="/schedule">Schedule</a></Link>
              <Link><a class="dropdown-item" to="/videos">Videos</a></Link>
              {/* <Link><a class="dropdown-item" to="/logout">Log Out</a></Link> This isnt right! */}
            </ul>
          </li>
      </Header>
 
  );
}
