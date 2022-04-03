import React from 'react';
import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FeedIcon from '@mui/icons-material/Feed';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CategoryIcon from '@mui/icons-material/Category';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <span className="sidebar__logo">NVT Blog</span>
      </div>
      <hr />
      <div className="sidebar__center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <Link to={'/'}>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </Link>
          </li>
          <p className="title">List</p>
          <li>
            <PersonOutlineIcon className="icon" />
            <span>Accounts</span>
          </li>
          <li>
            <Link to={'/posts'}>
              <FeedIcon className="icon" />
              <span>Posts</span>
            </Link>
          </li>
          <li>
            <VideoLibraryIcon className="icon" />
            <span>Videos</span>
          </li>
          <li>
            <CategoryIcon className="icon" />
            <span>Categories</span>
          </li>
          <li>
            <LocalOfferIcon className="icon" />
            <span>Tags</span>
          </li>
          <p className="title">Users</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="sidebar__bottom">
        <div className="sidebar__bottom-colorOption"></div>
        <div className="sidebar__bottom-colorOption"></div>
        <div className="sidebar__bottom-colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
