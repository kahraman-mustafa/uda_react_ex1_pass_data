import React, { Component } from "react";
import "./App.css";
import Movie from "./UserMovie";
import MovieUser from "./MovieUser"
import Dashboard from "./Dashboard";
import logo from "./logo.svg";

/* EXERCISE 1
Use React and the data below to display a list of users alongside their favorite movies.

For detailed instructions, refer to instructions.md.
*/

/* EXERCISE 2
Display a list of movies where each movie contains a list of users that favorited it.

For detailed instructions, refer to instructions.md.
*/

const profiles = [
  {
    id: 1,
    userID: "1",
    favoriteMovieID: "1",
  },
  {
    id: 2,
    userID: "2",
    favoriteMovieID: "1",
  },
  {
    id: 3,
    userID: "4",
    favoriteMovieID: "5",
  },
  {
    id: 4,
    userID: "5",
    favoriteMovieID: "2",
  },
  {
    id: 5,
    userID: "3",
    favoriteMovieID: "5",
  },
  {
    id: 6,
    userID: "6",
    favoriteMovieID: "4",
  },
];

const users = {
  1: {
    id: 1,
    name: "Jane Cruz",
    userName: "coder",
  },
  2: {
    id: 2,
    name: "Matthew Johnson",
    userName: "mpage",
  },
  3: {
    id: 3,
    name: "Autumn Green",
    userName: "user123",
  },
  4: {
    id: 4,
    name: "John Doe",
    userName: "user123",
  },
  5: {
    id: 5,
    name: "Lauren Carlson",
    userName: "user123",
  },
  6: {
    id: 6,
    name: "Nicholas Lain",
    userName: "user123",
  },
};

const movies = {
  1: {
    id: 1,
    name: "Planet Earth 1",
  },
  2: {
    id: 2,
    name: "Selma",
  },
  3: {
    id: 3,
    name: "Million Dollar Baby",
  },
  4: {
    id: 4,
    name: "Forrest Gump",
  },
  5: {
    id: 5,
    name: "Get Out",
  },
};



// Possible Solution 1 - With Bottom-Up Approach
class App extends Component {
  /*
  The constructor is a "special method for creating and initializing an object."
  (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes). The
  Component's constructor is the first thing that runs when the object is created.
  */ 
  constructor(props) {
    super(props);
    this.usersByMovie = {};

    /*
    We can map the users by the movie they liked.
    */ 
    profiles.forEach(profile => {
      const movieID = profile.favoriteMovieID;

      if (this.usersByMovie[movieID]) {
        this.usersByMovie[movieID].push(profile.userID);
      } else {
        this.usersByMovie[movieID] = [profile.userID];
      }
    });
  }

  /*
  The render method gets called automatically every time the value of the
  component's props changes.
  */ 
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>How Popular is Your Favorite Movie?</h2>
        <Dashboard
          usersByMovie={this.usersByMovie}
          movies={movies}
          users={users}
        />
      </div>
    );
  }
}

/* Benim ilk bulduğum çözüm
class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Favorite Movies</h2>

        {Object.keys(users).map((key, index) => (
          <Movie
            key={key}
            profiles={profiles}
            movies={movies}
            user={users[key]}
          />
        ))}

        {Object.values(movies).map((movie, index) => (
          <MovieUser movie={movie} profiles={profiles} users={users} />
        ))}
      </div>
    );
  }
}
*/

export default App;
