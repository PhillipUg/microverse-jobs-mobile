const initState = [
  {
    id: 2,
    company: "Amazon",
    position: "junior dev",
    salary: "50k",
    description: "Does beginner stuff",
    location: 'new york'
  }

];

const userFavoritesReducer = (state = initState, action) => {
  return state;
}

export default userFavoritesReducer;