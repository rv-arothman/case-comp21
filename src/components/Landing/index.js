import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import 'bulma/css/bulma.min.css';
import './styles.css'


function triggerGenre() {
    if (document.getElementById("genre-dropdown").classList.contains("is-active")) {
        document.getElementById("genre-dropdown").classList.remove("is-active");
    } else {
        document.getElementById("genre-dropdown").classList.add("is-active");
    }

}

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

const populateForm = event => {
    let parentID = event.target.parentNode.id;
    parentID += '-button';
    document.getElementById(parentID).innerHTML = event.target.innerHTML;
}

const submitForm = event => {
    const popOrRand = event.target.id;
    const genre = document.getElementById('genre-button').innerHTML;
    const type = document.getElementById('type-button').innerHTML;
    const rating = document.getElementById('rating-button').innerHTML;
    const year = document.getElementById('year-button').innerHTML;
    const stream = document.getElementById('stream-button').innerHTML;

    const jsonObject = {
        popOrRand: popOrRand,
        genre: genre,
        type: type,
        rating: rating,
        year: year,
        stream: stream
    }

    console.log(jsonObject);
    return jsonObject;
}


function Landing() {
    return (
        <section className="main">
            <div className="main-header">
                <h1 className="header">RV MOVIE PICKS</h1>
            </div>
            <div className="main-button-selection">
                <div id="genre-dropdown" className="dropdown" onClick={triggerGenre}>
                    <div className="dropdown-trigger">
                        <button className="button button-size" aria-haspopup="true" aria-controls="dropdown-menu">
                            <div className="button-text-container"><span id="genre-button" className="main-button-name">GENRE</span>
                                <span className="icon is-medium">
                                    <FontAwesomeIcon className="button-arrow" icon={faAngleDown} />
                                </span></div>
                        </button>
                    </div>
                    <div className="dropdown-menu" id="dropdown-menu" role="menu">
                        <div id="genre" className="dropdown-content">
                            <div onClick={populateForm} className="dropdown-item">
                                Action
                            </div>
                            <div onClick={populateForm} className="dropdown-item">
                                Comedy
                            </div>
                            <div onClick={populateForm} href="edenchou.com" className="dropdown-item is-active">
                                Horror
                            </div>
                            <div onClick={populateForm} href="edenchou.com" className="dropdown-item is-active">
                                Romance
                            </div>
                            <div onClick={populateForm} href="edenchou.com" className="dropdown-item is-active">
                                Thriller
                            </div>
                        </div>
                    </div>
                </div>
                <div id="type-dropdown" className="dropdown" onClick={triggerType}>
                    <div className="dropdown-trigger">
                        <button className="button button-size" aria-haspopup="true" aria-controls="dropdown-menu">
                            <div className="button-text-container"><span id="type-button" className="main-button-name">TYPE</span>
                                <span className="icon is-medium">
                                    <FontAwesomeIcon className="button-arrow" icon={faAngleDown} />
                                </span></div>
                        </button>
                    </div>
                    <div className="dropdown-menu" id="dropdown-menu" role="menu">
                        <div id="type" className="dropdown-content">
                            <div onClick={populateForm} className="dropdown-item movie-option">
                                Movie
                            </div>
                            <div onClick={populateForm}className="dropdown-item is-active">
                                TV Show
                            </div>
                        </div>
                    </div>
                </div>
                <div id="rating-dropdown" className="dropdown" onClick={triggerRating}>
                    <div className="dropdown-trigger">
                        <button className="button button-size" aria-haspopup="true" aria-controls="dropdown-menu">
                            <div className="button-text-container"><span id="rating-button" className="main-button-name">RATING</span>
                                <span className="icon is-medium">
                                    <FontAwesomeIcon className="button-arrow" icon={faAngleDown} />
                                </span></div>
                        </button>
                    </div>
                    <div className="dropdown-menu" id="dropdown-menu" role="menu">
                        <div id="rating" className="dropdown-content">
                            <div onClick={populateForm} className="dropdown-item">
                                G
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
                                <span className="icon is-small">
                                    <FontAwesomeIcon icon={faAngleDown} />
                                </span></div>
                        </button>
                    </div>
                    <div className="dropdown-menu" id="dropdown-menu" role="menu">
                        <div id="year" className="dropdown-content">
                            <div onClick={populateForm} className="dropdown-item">
                                2021
                            </div>
                            <div onClick={populateForm} className="dropdown-item">
                                2020
                            </div>
                            <div onClick={populateForm}className="dropdown-item is-active">
                                2019
                            </div>
                        </div>
                    </div>
                </div>
                <div id="stream-dropdown" className="dropdown" onClick={triggerStream}>
                    <div className="dropdown-trigger">
                        <button className="button button-size" aria-haspopup="true" aria-controls="dropdown-menu">
                            <div className="button-text-container"><span id="stream-button" className="main-button-name">STREAM</span>
                                <span className="icon is-small">
                                    <FontAwesomeIcon icon={faAngleDown} />
                                </span></div>
                        </button>
                    </div>
                    <div className="dropdown-menu" id="dropdown-menu" role="menu">
                        <div id="stream" className="dropdown-content">
                            <div onClick={populateForm} className="dropdown-item">
                                Netflix
                            </div>
                            <div onClick={populateForm} className="dropdown-item">
                                Hulu
                            </div>
                            <div onClick={populateForm} className="dropdown-item is-active">
                                HBO Max
                            </div>
                            <div onClick={populateForm} className="dropdown-item is-active">
                                YouTube
                            </div>
                            <div onClick={populateForm} className="dropdown-item is-active">
                                Amazon Prime Video
                            </div>
                            <div onClick={populateForm} className="dropdown-item is-active">
                                Disney Plus
                            </div>
                            <div onClick={populateForm} className="dropdown-item is-active">
                                Paramount Plus
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
        </section>)
}

export default Landing;