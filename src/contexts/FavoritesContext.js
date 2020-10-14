import React, { createContext, useState, useEffect } from 'react'
import authHeader from '../services/authHeader'
// import axios from 'axios'

export const FavoritesContext = createContext();

const FavoritesContextProvider = (props) => {
  const [favorites, setFavorites] = useState({ favorites: [] })

  useEffect(() => {
    fetch('https://microverse-jobs-api.herokuapp.com/api/v1/favorites', { headers: authHeader() })
      .then((res) => res.json())
      .then(data => { console.log(data); setFavorites({ favorites: data }) })
  }, [])

  return (
    <FavoritesContext.Provider value={{ ...favorites }}>
      {props.children}
    </FavoritesContext.Provider>
  )
}
export default FavoritesContextProvider;