import React, {Component} from "react"


class UserMovie extends Component {
	render(){
        const user = this.props.user
        const profiles = this.props.profiles
        const movies = this.props.movies

        const movieID = profiles.filter(
            (profile) => profile.userID === user.id.toString()
          ).map((profile) => (profile.favoriteMovieID))

        const movieName = Object.keys(movies)
          .filter((key) => movies[key].id.toString() === movieID[0])
          .map((key) => movies[key].name);

    	return <p>{user.name}'s favorite movie is {movieName[0]}</p>;
    }  
}

export default UserMovie;