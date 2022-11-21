import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './bugger.css';
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons";



const Bugger = () => {
const [navbarOpen, setNavbarOpen] = useState(false);



    const handleToggle = () => {
 setNavbarOpen(!navbarOpen)
}

const closeMenu = () => {
  setNavbarOpen(false)
}
  
  return (
    
    <nav className="navBar">
    <button onClick={handleToggle}>{navbarOpen ? (
    <MdClose style={{ color:"#7b7b7b", width: "20px", height: "40px" }} />
  ) : (
    <FiMenu style={{ color: "#fff", width: "20px", height: "40px" }} />
  )}</button>

  <div  className={`menuNav ${navbarOpen ? " showMenu" : ""}`} onClick={() => closeMenu }>
 <div className="sidebars">

      <Link to="/" style={{ textDecoration: "none"}}>
          <span className="logo" style = {{ color:"#1877f2", marginTop:"10px"}}>Lawsocial</span>
        </Link>

      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
       
      </div>
    </div>
  </div>

    
  </nav>

  )
}

export default Bugger