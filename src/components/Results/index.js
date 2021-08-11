import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './styles.css';
import Movies from '../Landing';
import { cards } from '../Landing';




class Results extends React.Component {
    
    render() {
        console.log("cards at zero", cards[0]);
        let newCards = [];
        for(let i = 0; i , i < cards.length; i = i + 2) {
            newCards.push(cards[i]);

        }
        console.log("newcards", newCards);
        return (
            <section className="main-results">
                <Link to="/"><div className="main-results-arrow-container">
                    <div className="main-results-arrow">
                        <FontAwesomeIcon className="icon results is-large" icon={faArrowLeft}></FontAwesomeIcon>
                        <div>
                            <h3 className="main-results-nav">Return to Home</h3>
                        </div>
                    </div>
                </div>
                </Link>

                <div className="main-results-header">
                    <h1 className="results-header">DREAM STREAM RESULTS</h1>
                </div>
                <section className="movies">
                    <div dangerouslySetInnerHTML={{__html: newCards}}></div>
                </section>
            </section>
        )
    }
}


export default Results;