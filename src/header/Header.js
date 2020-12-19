import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home"
import SupervisorAccount from "@material-ui/icons/SupervisorAccount"
import BusinessCenter from "@material-ui/icons/BusinessCenter"
import ChatIcon from "@material-ui/icons/Chat"
import NotificationsIcon from "@material-ui/icons/Notifications"
const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
          alt=""
        />

        <div className="header__search">
          {/* Search icon */}
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header__right">
          <HeaderOption Icon={HomeIcon} title="Home"/>
          <HeaderOption Icon={SupervisorAccount} title="My Network"/>
          <HeaderOption Icon={BusinessCenter} title="Jobs"/>
          <HeaderOption Icon={ChatIcon} title="Messaging"/>
          <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
          <HeaderOption avatar="https://media-exp1.licdn.com/dms/image/C4E03AQHX6sSUJYGzZQ/profile-displayphoto-shrink_200_200/0/1600780614827?e=1613606400&v=beta&t=Dt2g6mzAqU9A_mjelyI7RWTjmZTuyBsPEHbEHJVGsPY" title="Me"/>
      </div>
    </div>
  );
};

export default Header;
