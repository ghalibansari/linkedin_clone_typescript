import React, {useState, useEffect} from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption";
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from "./Post";
import {db} from './fireBase'
import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";

interface IPost {
    id: string;
    data: {
        name: string;
        description: string;
        message: string;
        photoUrl: string;
        timeStamp: Date;
    }
}

const Feed = () => {
    const user = useSelector(selectUser)
    const [input, setInput] = useState<string>('')
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        db
        .collection('posts')
        .orderBy('timeStamp', 'desc')
        .onSnapshot((snapshot) => {
            setPosts(snapshot.docs.map((doc) => (
                {id: doc.id, data: doc.data() as IPost['data']}
            )))
        })
    }, [])

    const sendPost = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        db.collection('posts').add({
            name: user?.displayName,
            description: user?.email,
            message: input,
            photoUrl: user.photoURL || '',
            timeStamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        setInput('');
    };

    const deletePost = (id: IPost['id']) => {
        db
        .collection('posts')
        .doc(id)
        .delete()
        .then(() => {})
        .catch(err => alert(err))
    }

    return (
        <div className="feed">
            <div className="feed_input_container">
                <div className="feed_input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>

                <div className="feed_input_option">
                    <InputOption Icon={ImageIcon} title={'Photo'} color={'#70B5F9'} />
                    <InputOption Icon={SubscriptionsIcon} title={'Video'} color={'#E7A33E'} />
                    <InputOption Icon={EventNoteIcon} title={'Event'} color={'#C0CBCD'} />
                    <InputOption Icon={CalendarViewDayIcon} title={'Write Article'} color={'#7FC15E'} />
                </div>
            </div>

            <FlipMove>
            {posts.map(({id, data: {name, description, message, photoUrl}}) => (
                <Post key={id} id={id} name={name} description={description} message={message} photoUrl={photoUrl} deletePost={deletePost} />
            ))}
            </FlipMove>
        </div>
    );
};

export default Feed;
