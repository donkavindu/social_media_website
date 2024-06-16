import React from 'react'
import './leftpane.css'
import ForumIcon from '@mui/icons-material/Forum';
import GroupIcon from '@mui/icons-material/Group';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import FlagIcon from '@mui/icons-material/Flag';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BuildIcon from '@mui/icons-material/Build';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function Leftpane() {
  return (
    <div className='leftpane'>
      <div className="leftpane-container">
        
        <div className="leftpane-menu">
          <li className="left-menuitem">
            <ForumIcon/>
            <span className="menu-item-name">Messages</span>
          </li>
          <li className="left-menuitem">
            <GroupIcon/>
            <span className="menu-item-name">Groups</span>
          </li>
          <li className="left-menuitem">
            <RssFeedIcon/>
            <span className="menu-item-name">Feed</span>
          </li>
          <li className="left-menuitem">
            <FlagIcon/>
            <span className="menu-item-name">Pages</span>
          </li>
          <li className="left-menuitem">
            <CalendarMonthIcon/>
            <span className="menu-item-name">Event</span>
          </li>
          <li className="left-menuitem">
            <BuildIcon/>
            <span className="menu-item-name">Settings</span>
          </li>
          <li className="left-menuitem">
            <SportsEsportsIcon/>
            <span className="menu-item-name">Games</span>
          </li>
          <li className="left-menuitem">
            <NewspaperIcon/>
            <span className="menu-item-name">News</span>
          </li>
          <li className="left-menuitem">
            <WorkOutlineIcon/>
            <span className="menu-item-name">Jobs</span>
          </li>
          <li className="left-menuitem">
            <AddShoppingCartIcon/>
            <span className="menu-item-name">Market</span>
          </li>
        </div>
        
        <hr /><br />

        <div className="liked-pages">
          <h3>Likes Pages</h3>
          <li className="page-list">
            <img src="/images/01.jpg" alt="" />
            <span className="page-name">Daily Hacks</span>
          </li>
          <li className="page-list">
            <img src="/images/01.jpg" alt="" />
            <span className="page-name">Daily Hacks</span>
          </li>
          <li className="page-list">
            <img src="/images/01.jpg" alt="" />
            <span className="page-name">Daily Hacks</span>
          </li>
          <li className="page-list">
            <img src="/images/01.jpg" alt="" />
            <span className="page-name">Daily Hacks</span>
          </li>
          <li className="page-list">
            <img src="/images/01.jpg" alt="" />
            <span className="page-name">Daily Hacks</span>
          </li>
          <li className="page-list">
            <img src="/images/01.jpg" alt="" />
            <span className="page-name">Daily Hacks</span>
          </li>
        </div>
        
      </div>
    </div>
  )
}
