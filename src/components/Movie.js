import React from 'react';

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass =(vote) => {
    if(vote >= 7) {
        return 'green'
    } else if (vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
};

const Movie = ({title, poster_path, overview, vote_average}) => (
    <div className="movie">
        <img src={poster_path ? (IMG_API + poster_path) : 
            'https://cdn.pixabay.com/photo/2019/05/23/13/11/headphones-4223911_960_720.jpg'
            } alt={title} />
        <div className="movie-info">
            <h3>{title}</h3>
            <span className={`tag ${setVoteClass(vote_average)}`}>
                {vote_average}
            </span>
        </div>

        <div className="movie-over">
            <h2>{title}</h2>
            <p>{overview}</p>
        </div>
    </div>
)

export default Movie;
