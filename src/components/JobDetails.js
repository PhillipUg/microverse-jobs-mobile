import React, { useContext } from 'react';
import { JobContext } from '../contexts/JobContext';
import styles from './JobDetails.module.css';
import { Redirect } from 'react-router-dom'
import AuthService from '../services/authService';
// import axios from 'axios'
import FavoriteService from '../services/favoriteService';
// import authHeader from '../services/authHeader';
import { FavoritesContext } from '../contexts/FavoritesContext';

const JobDetails = (props) => {
  const { jobs } = useContext(JobContext)
  const { favorites } = useContext(FavoritesContext)
  const id = parseInt(props.match.params.id)
  const job = jobs.filter(job => job.id === id)

  const user = AuthService.getCurrentUser();

  // const [favorited, setFavorited] = useState(false)

  // useEffect(() => {
  //   axios.get("http://localhost:3001/api/v1/favorites", { headers: authHeader() })
  //     .then(res => console.log(res))
  // }, [])

  const res = favorites.filter(fav => fav.job_id === job[0].id && fav.user_id === user.user.id)
  console.log(res)

  if (!user) return <Redirect to="/signin" />

  // console.log(user.user.id, job[0].id)


  // const handleClick = (e) => {

  //   if (e.target.value === "favorite") {
  //     // setFavorited(true)
  //     // FavoriteService.favorite(user.user.id, job[0].id)
  //   } else {
  //     // setFavorited(false)
  //     // FavoriteService.unfavorite(user.user.id, job[0].id)
  //   }
  // }

  // favorited ? () : ()
  let btn;
  if (!res.length) {
    btn = <button onClick={() => FavoriteService.updateFav(user.user.id, job[0].id)} value="favorite" style={{ background: "yellow" }}>Add to favs</button>
  } else {
    btn = <button onClick={() => FavoriteService.updateFav(user.user.id, job[0].id)} value="favorite" style={{ background: "red" }}>Remove from favs</button>
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
