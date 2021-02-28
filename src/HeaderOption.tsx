import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

interface IHeaderOption {
  Icon?: any;
  title: string;
  avatar?: boolean;
  onClick?: any;
}

const HeaderOption = ({ Icon, title, avatar=false, onClick }: IHeaderOption) => {
  const user = useSelector(selectUser)
  
  return (
    <div onClick={onClick} className="header_option">
      {Icon && <Icon className="header_option_icon" />}
      {avatar && <Avatar className="header_option_icon" src={user?.photoURL} >{user?.email[0].toUpperCase()}</Avatar>}
      <h3 className="header_option_title">{title}</h3>
    </div>
  );
};

export default HeaderOption;
