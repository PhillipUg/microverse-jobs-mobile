import React, { useEffect, useContext, useState } from 'react';
import { JobContext } from '../contexts/JobContext';
import styles from '../assets/styles/JobDetails.module.css';
import { Redirect } from 'react-router-dom'
import AuthService from '../services/authService';
import axios from 'axios'
import FavoriteService from '../services/favoriteService';
import authHeader from '../services/authHeader';

const JobDetails = (props) => {
  const { jobs } = useContext(JobContext)
  const id = parseInt(props.match.params.id)
  const job = jobs.filter(job => job.id === id)

  const user = AuthService.getCurrentUser();

  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    axios.get('https://microverse-jobs-api.herokuapp.com/api/v1/favorites', { headers: authHeader() })
      .then(res => setFavorites(res.data))
  }, [])

  const res = favorites.filter(fav => fav.job_id === job[0].id && fav.user_id === user.user.id)

  if (!user) return <Redirect to="/signin" />

  const handleClick = (e) => {
    if (e.target.value === "favorite") {
      e.target.value = "unfavorite"
      e.target.style.background = "red"
      e.target.textContent = "Remove from favorites"
      FavoriteService.updateFav(user.user.id, job[0].id)
    } else {
      e.target.value = "favorite"
      e.target.style.background = "yellow"
      e.target.textContent = "Add to favorites"
      FavoriteService.updateFav(user.user.id, job[0].id)
    }
  }


  let btn;
  if (!res.length) {
    btn = <button onClick={handleClick} style={{ background: "yellow" }} value="favorite" >Add to favs</button>
  } else {
    btn = <button onClick={handleClick} style={{ background: "red" }} value="unfavorite" >Remove from favs</button>
  }

  return (

    <div className={styles.details}>

      <div>
        <span>Company:</span>
        {job[0].company}
      </div>
      <div>
        <span>Position:</span>
        {job[0].position}
      </div>
      <div>
        <span>Description:</span>
        {job[0].description}
      </div>
      {btn}


    </div>
  );
};

export default JobDetails;
