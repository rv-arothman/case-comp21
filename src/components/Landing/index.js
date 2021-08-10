import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faExclamationCircle, faTicketAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Link } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import './styles.css'

function triggerType() {
    if (document.getElementById("type-dropdown").classList.contains("is-active")) {
        document.getElementById("type-dropdown").classList.remove("is-active");
    } else {
        document.getElementById("type-dropdown").classList.add("is-active");
    }

}

function triggerRating() {
    if (document.getElementById("rating-dropdown").classList.contains("is-active")) {
        document.getElementById("rating-dropdown").classList.remove("is-active");
    } else {
        document.getElementById("rating-dropdown").classList.add("is-active");
    }

}

function triggerYear() {
    if (document.getElementById("year-dropdown").classList.contains("is-active")) {
        document.getElementById("year-dropdown").classList.remove("is-active");
    } else {
        document.getElementById("year-dropdown").classList.add("is-active");
    }
}

function triggerStream() {
    if (document.getElementById("stream-dropdown").classList.contains("is-active")) {
        document.getElementById("stream-dropdown").classList.remove("is-active");
    } else {
        document.getElementById("stream-dropdown").classList.add("is-active");
    }
}

function removeButton() {
    document.getElementById('main-error-msg').style.display = 'none';
}

const populateForm = event => {
    let parentID = event.target.parentNode.id;
    parentID += '-button';
    document.getElementById(parentID).innerHTML = event.target.innerHTML;
}

const submitForm = event => {
    const popOrRand = event.target.id;
    const type = document.getElementById('type-button').innerHTML;
    const rating = document.getElementById('rating-button').innerHTML;
    const year = document.getElementById('year-button').innerHTML;
    const stream = document.getElementById('stream-button').innerHTML;

    if (type === "TYPE") {
        document.getElementById('main-error-msg').style.display = 'flex';
    } else {
        const jsonObject = {
            popOrRand: popOrRand,
            type: type,
            rating: rating,
            year: year,
            stream: stream
        }

        document.getElementById('result').style.display = 'flex';

        console.log(jsonObject);
        return jsonObject;
    }
}


class Landing extends React.Component {

    render() {
        return (
            <section className="main">
                <div className="main-header">
                    <div className="main-ticker-header">
                        <FontAwesomeIcon className="icon is-medium ticket" icon={faTicketAlt} />
                        <FontAwesomeIcon className="icon is-medium ticket" icon={faTicketAlt} />
                        <FontAwesomeIcon className="icon is-medium ticket" icon={faTicketAlt} />
                    </div>
                    <h1 className="header">DREAM STREAM</h1>
                    <h3 className="subtitle">RV MOVIE PICKS</h3>
                </div>

                <div className="main-button-selection">
                    <div id="main-error-msg" className="main-error-msg">
                        <article className="message is-danger">
                            <div className="message-header">
                                <p>Media Type Required</p>
                                <button onClick={removeButton} className="delete" aria-label="delete"></button>
                            </div>
                            <div className="message-body">
                                Please select a media type in the 'TYPE' dropdown.
                            </div>
                        </article>
                    </div>
                    <div id="type-dropdown" className="dropdown" onClick={triggerType}>
                        <div className="dropdown-trigger">
                            <button className="button button-size" aria-haspopup="true" aria-controls="dropdown-menu">
                                <div className="button-text-container"><span id="type-button" className="main-button-name">TYPE</span>
                                    <FontAwesomeIcon className="button-arrow icon is-large" icon={faAngleDown} /></div>
                            </button>
                        </div>
                        <div className="dropdown-menu" id="dropdown-menu" role="menu">
                            <div id="type" className="dropdown-content">
                                <div onClick={populateForm} className="dropdown-item movie-option">
                                    Movie
                                </div>
                                <div onClick={populateForm} className="dropdown-item is-active">
                                    TV Show
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="rating-dropdown" className="dropdown" onClick={triggerRating}>
                        <div className="dropdown-trigger">
                            <button className="button button-size" aria-haspopup="true" aria-controls="dropdown-menu">
                                <div className="button-text-container"><span id="rating-button" className="main-button-name">RATING</span>
                                    <FontAwesomeIcon className="button-arrow icon is-large" icon={faAngleDown} /></div>
                            </button>
                        </div>
                        <div className="dropdown-menu" id="dropdown-menu" role="menu">
                            <div id="rating" className="dropdown-content">
                                <div onClick={populateForm} className="dropdown-item">
                                    NR
                                </div>
                                <div onClick={populateForm} className="dropdown-item">
                                    PG
                                </div>
                                <div onClick={populateForm} className="dropdown-item">
                                    PG-13
                                </div>
                                <div onClick={populateForm} className="dropdown-item">
                                    R
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="year-dropdown" className="dropdown" onClick={triggerYear}>
                        <div className="dropdown-trigger">
                            <button className="button button-size" aria-haspopup="true" aria-controls="dropdown-menu">
                                <div className="button-text-container"><span id="year-button" className="main-button-name">YEAR</span>
                                    <FontAwesomeIcon className="icon is-large" icon={faAngleDown} /></div>
                            </button>
                        </div>
                        <div className="dropdown-menu" id="dropdown-menu" role="menu">
                            <div id="year" className="dropdown-content">
                                <div onClick={populateForm} className="dropdown-item">
                                    2020s
                                </div>
                                <div onClick={populateForm} className="dropdown-item">
                                    2010s
                                </div>
                                <div onClick={populateForm} className="dropdown-item is-active">
                                    2000s
                                </div>
                                <div onClick={populateForm} className="dropdown-item is-active">
                                    1999 and older
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="stream-dropdown" className="dropdown" onClick={triggerStream}>
                        <div className="dropdown-trigger">
                            <button className="button button-size" aria-haspopup="true" aria-controls="dropdown-menu">
                                <div className="button-text-container"><span id="stream-button" className="main-button-name">STREAM</span>
                                    <FontAwesomeIcon className="icon is-large" icon={faAngleDown} /></div>
                            </button>
                        </div>
                        <div className="dropdown-menu" id="dropdown-menu" role="menu">
                            <div id="stream" className="dropdown-content">
                                <div onClick={populateForm} className="dropdown-item">
                                    Netflix
                                </div>
                                <div onClick={populateForm} className="dropdown-item is-active">
                                    HBO Max
                                </div>
                                <div onClick={populateForm} className="dropdown-item is-active">
                                    Amazon Prime Video
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-show-me">
                    <span className="show-me">SHOW ME SOMETHING...</span>
                </div>
                <div className="main-pop-rand">
                    <button onClick={submitForm} id="popular" className="button pop-rand">POPULAR</button>
                    <button onClick={submitForm} id="random" className="button pop-rand">RANDOM</button>
                </div>
                <div id="result" className="main-results-container"><Link to="/results"><button className="button results pop-rand">SEE RESULTS</button></Link></div>
            </section>)
    }
}

export default Landing;