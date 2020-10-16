import React, { useEffect, useState } from 'react';
import styles from '../assets/styles/JobDetails.module.css';
import { Redirect } from 'react-router-dom'
import AuthService from '../services/authService';
import axios from 'axios'
import FavoriteService from '../services/favoriteService';
import authHeader from '../services/authHeader';

const JobDetails = (props) => {

  const user = AuthService.getCurrentUser();

  const [job, setJob] = useState(null)
  const [favorited, setFavorited] = useState(null)

  const id = parseInt(props.match.params.id)
  useEffect(() => {
    axios.get(`https://microverse-jobs-api.herokuapp.com/api/v1/jobs/${id}`, { headers: authHeader() })
      .then(res => {
        setJob(res.data.job);
        setFavorited(res.data.favorited);
      })
  }, [id])

  if (!user) return <Redirect to="/signin" />

  const handleClick = (e) => {
    if (e.target.value === "favorite") {
      e.target.value = "unfavorite"
      e.target.style.background = "red"
      e.target.textContent = "Remove from favorites"
      FavoriteService.updateFav(user.user.id, job.id)
    } else {
      e.target.value = "favorite"
      e.target.style.background = "#ED5C28"
      e.target.textContent = "Add to favorites"
      FavoriteService.updateFav(user.user.id, job.id)
    }
  }


  let btn;
  if (favorited === null) {
    btn = ""
  } else if (favorited === false) {
    btn = <button onClick={handleClick} style={{ background: "#ED5C28" }} value="favorite" >Add to favorites</button>
  } else {
    btn = <button onClick={handleClick} style={{ background: "red" }} value="unfavorite" >Remove from favorites</button>
  }

  return (

    <div className={styles.details}>
      <div className={styles.wrapper}>
        <div className={styles.img}><img src={require(`../assets/images/logo${id}.jpg`)} alt="company logo" /></div>
        <div>
          <span>Company:</span>
          {job && job.company}
        </div>
        <div>
          <span>Position:</span>
          {job && job.position}
        </div>
        <div>
          <span>Salary:</span>
          {job && job.salary}
        </div>
        <div>
          <span>Location:</span>
          {job && job.location}
        </div>
        <div>
          <span>About {job && job.company}</span>
          {job && job.description}
        </div>
        <div>
          <span>Description</span>
          {job && job.description}
        </div>
        <div>
          <span>Requirements</span>
          {job && job.description}
        </div>
        <div>
          <span>Benefits</span>
          {job && job.description}
        </div>
      </div>
      {btn}


    </div>
  );
};

export default JobDetails;
