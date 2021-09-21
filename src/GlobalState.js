import axios from 'axios'
import React, { createContext, useState, useEffect, useReducer } from 'react'

const initialState = {
    game:[]
}
const apiReducer = (state, {type,payload}) => {
    switch(type){
        case "SET_LEAGUES":
            return{
                ...state,
                game:payload
            }
         default:
            return {...state}
    }

}

export const GlobalState = createContext()

export const DataProvider = (props) => {
  
    const [state,dispatch] = useReducer(apiReducer,initialState)

    useEffect(() => {
        const api = async () => {
            const res = await axios.get('https://api.pandascore.co/videogames?token=oYCPgx80nO9GBKope8wTvpqr-EeoCYQDMidjipXqakxvzh-d2fk', {
                headers: {
                    'Accept': 'application/json'
                }

            })
          
           dispatch({type:'SET_LEAGUES',payload:res.data})
        }
       api()
    }, [])

    return(
        <GlobalState.Provider value={{state,dispatch}}>
            {props.children}
        </GlobalState.Provider>
    )
}
