import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faExclamationCircle, faTicketAlt } from '@fortawesome/free-solid-svg-icons'
import 'bulma/css/bulma.min.css';
import './styles.css'
import React from 'react';

const MovieCard = props => {

        const { title, year, rated, genre, director, poster, actors, overview, stream } = props;
        
        return (
            <section className="movies">
                <div className="main-header">
                    <h1 className="title">{title}</h1>
                    <h3 className="year">{year} + "  " + {rated}</h3>
                    <h4>{genre}</h4>
                    <h4>{director}</h4>
                    <img className="moviePoster" src="https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_SX300.jpg" alt="Spiderman"></img>
                    <h4>{actors}</h4>
                    <h4>{overview}</h4>
                    <button  id="stream" className="button stream">{stream}</button>
                </div>
            </section>
        )      
};

export default MovieCard;