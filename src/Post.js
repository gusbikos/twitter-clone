import React from 'react'
import './Post.css'
import myavatar from './myavatar.JPG'
import { Avatar } from '@mui/material'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import RepeatIcon from '@mui/icons-material/Repeat'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import PublishIcon from '@mui/icons-material/Publish'

const Post = ({ displayName, username, verified, text, image, avatar }) => {

    return (
        <div className="post">
            <div className="post-avatar">
                <Avatar 
                    src={myavatar}>
                </Avatar>
            </div>
            <div className="post-body">
                <div className="post-header">
                    <div className="post-headertext">
                        <h3>
                            Gus Bikos{" "}
                            <span className="post-headerspecial">
                                <VerifiedUserIcon className="post-badge"></VerifiedUserIcon> 
                                @Gusbikos
                            </span>
                        </h3>
                    </div>
                    <div className="post-headerdescription">
                        <p>Let's build a Twitter clone with React!</p>
                    </div>
                    <div>
                        <img
                            src="https://media1.giphy.com/media/yBwgX64KAPrHW2ltZ2/giphy.gif?cid=ecf05e47hzws48l6qfzikwm2u0ed5uei3hvl3o429qi5i6nm&rid=giphy.gif&ct=g"
                            alt=""
                        />
                        <div className="post-footer">
                            <ChatBubbleOutlineIcon fontsize="small" />
                            <RepeatIcon fontSize="small" />
                            <FavoriteBorderIcon fontSize="small" /> 
                            <PublishIcon fontSize="small" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
