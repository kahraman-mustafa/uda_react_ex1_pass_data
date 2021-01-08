import React, {Component} from "react"


class MovieUser extends Component {
	render(){
        const movie = this.props.movie
        const profiles = this.props.profiles
        const users = this.props.users

        const userIDs = profiles.filter(
            (profile) => profile.favoriteMovieID === movie.id.toString()
          ).map((profile) => (profile.userID))

        const userNames = Object.keys(users)
          .filter((key) => userIDs.includes(users[key].id.toString()))
          .map((key) => users[key].name);

    	return userNames.length > 0 ? (
            <div key={movie.id}>
                <h2>{movie.name}</h2>
                <p>Liked By:</p>
                <ul>
                    {userNames.map((userName) => (
                    <li key={userName}>{userName}</li>
                    ))}
                </ul>
            </div>
        ) : (
            <div key={movie.id}>
                <h2>{movie.name}</h2>
                <p>None of the current users liked this movie</p>
            </div>
        );
    }  
}

export default MovieUser;