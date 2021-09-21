import React from 'react'
import { Route } from 'react-router'
import GameList from './mainPages/Games/GameList'
import HomePage from './mainPages/HomePage/HomePage'
import League from './mainPages/League/League'


export default function Pages() {
  
    return (
        <div>
            <Route path="/" exact component={HomePage}></Route>
            <Route path="/games" exact  component={GameList} ></Route> 
            <Route path="/game/:game/:league" exact component={League} />
        </div>
    )
}
