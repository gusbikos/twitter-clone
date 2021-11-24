import React from 'react'
import './Widgets.css'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from "react-twitter-embed"
import SearchIcon from "@material-ui/icons/Search"

const Widgets = () => {
    return (
        <div className="widgets">
            <div className="widgets-input">
                <SearchIcon className="widgets-searchicon" />
                <input placeholder="Search Twitter" type="text" />
            </div>
            <div className="widgets-container">
                <h2>What's happening</h2>

                <TwitterTweetEmbed
                    tweetId={'1463265181115551752'}
                />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="gusbikos"
                    options={{height: 400}}
                />

                <TwitterShareButton
                    url={'https://facebook.com/gusbikos'}
                    options={{ text: '#reactjs is awesome', via: 'gusbikos' }}
                />


            </div>
        </div>
    )
}

export default Widgets
