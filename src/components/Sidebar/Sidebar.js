import './Sidebar.css';
import React from 'react'
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice'

function Sidebar() {
  const user = useSelector(selectUser)
  const recentItem = ( topic ) => {
    return (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
    )
  }
    return (
        <div className="sidebar">
            <div className="sidebar__top">
            <img 
              src="https://images.unsplash.com/photo-1560345573-9f453083c335?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NjR8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60"
              alt="cover pics" 
        />
               <Avatar src={user.photoUrl}>{user?.email?.[0] || ""}</Avatar>
               <h2>{user.displayName}</h2>
               <h4>{user.email}</h4>
            </div>
            <div className="sidebar__stats">
              <div className="sidebar__stat">
                <p>Who viewed your profile</p>
                <p className="sidebar__statNumber">126</p>
              </div>
              <div className="sidebar__stat">
                <p>Views of your post</p>
                <p className="sidebar__statNumber">67</p>
              </div>
            </div>
            <div className="sidebar__bottom">
              <p>Recent</p>
              {recentItem('programming')}
              {recentItem('jobs')}
              {recentItem('fintech')}
              {recentItem('spaceX')}
              {recentItem('MongoDB')}
              <h4>Followed Hastags</h4>
              {recentItem('nodejs')}
              {recentItem('reactjs')}
              {recentItem('developer')}
              {recentItem('business')}
              {recentItem('tech')}
            </div>
        </div>
    )
}

export default Sidebar
