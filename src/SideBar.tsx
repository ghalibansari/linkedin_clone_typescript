import React from "react";
import "./SideBar.css";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

interface IHeaderOption {
    // Icon?: JSX.Element;
    Icon?: any;
    avatar?: string;
    title: string;
}

const SideBar = () => {
    const user = useSelector(selectUser)

    const recentItem = (topic: string) => (
        <div className={'side_bar_recent_item'}>
            <span className="side_bar_hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className="side_bar">
            <div className="side_bar_top">
                <img src="https://images.unsplash.com/photo-1577099420559-c4fb6a8b8733?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt=""/>
                <Avatar className="side_bar_avatar" src={user.photoURL} >{user.email[0].toUpperCase()}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="side_bar_stats">
                <div className="side_bar_stat">
                    <p>Who Viewed You</p>
                    <p className="side_bar_stat_number">2453</p>
                </div>

                <div className="side_bar_stat">
                    <p>Views on Post</p>
                    <p className="side_bar_stat_number">4839</p>
                </div>
            </div>

            <div className="side_bar_bottom">
                <p>Recent</p>
                {recentItem('nodejs')}
                {recentItem('react')}
                {recentItem('typescript')}
                {recentItem('mongoDB')}
                {recentItem('developer')}
            </div>
        </div>
    );
};

export default SideBar;
