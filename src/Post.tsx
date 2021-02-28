import React, {forwardRef} from "react";
import "./Post.css";
import {Avatar} from "@material-ui/core";
import InputOption from "./InputOption";
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import CancelIcon from '@material-ui/icons/Cancel';

interface IPost {
    id: string;
    name: string;
    description: string;
    message: string;
    photoUrl?: string;
    deletePost: any;
}

const Post = forwardRef(({name, description, message, photoUrl, deletePost, id}: IPost, ref: any) => {
    const user = useSelector(selectUser)

    return (
        <div ref={ref} className="post">
            <div className="post_header">
                <Avatar src={photoUrl} >{name[0].toUpperCase()}</Avatar>
                <div className="post_info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <CancelIcon onClick={() => {deletePost(id)}} />

                </div>
            </div>

            <div className="post_body">
                <p>{message}</p>
            </div>

            <div className="post_buttons">
                <InputOption Icon={ThumbUpAltOutlinedIcon} title={'Like'} color={'gray'} />
                <InputOption Icon={ChatBubbleOutlineOutlinedIcon} title={'Comment'} color={'gray'} />
                <InputOption Icon={ShareOutlinedIcon} title={'Share'} color={'gray'} />
                <InputOption Icon={SendOutlinedIcon} title={'Send'} color={'gray'} />
            </div>
        </div>
    );
});

export default Post;
