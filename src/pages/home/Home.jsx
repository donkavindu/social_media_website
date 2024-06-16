import React from 'react'
import './home.css'
import NavBar from '../../components/navigation/NavBar'
import Leftpane from '../../components/leftpane/Leftpane'
import Postpane from '../../components/postpane/Postpane'
import Activeuserpane from '../../components/activeuserpane/Activeuserpane'

export default function Home() {
  return (
    <div>
      <NavBar/>
      <div className="bottomContainer">
        <Leftpane/>
        <Postpane/>
        <Activeuserpane/>
      </div>
    </div>
  )
}
