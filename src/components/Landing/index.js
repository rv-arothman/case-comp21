import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faTicketAlt } from '@fortawesome/free-solid-svg-icons'
import 'bulma/css/bulma.min.css';
import './styles.css';
import axios from 'axios';

//let jsonFormObjectStringify= "";

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
    let stream = document.getElementById('stream-button').innerHTML;

    //make it readable to the api
    let streamObj = {
        "Netflix" : 'netflix',
        "HBO Max" : 'hbo',
        "Amazon Prime Video" : 'amazon_prime',
        "STREAM" : "STREAM"
    }
    stream = streamObj[stream];

    const jsonObject = {
        popOrRand: popOrRand,
        genre: genre,
        type: type,
        rating: rating,
        year: year,
        stream: stream
    }
    console.log(jsonObject);

    if (stream === 'STREAM') {
        justMediaAPI(jsonObject)
    } else {
        mediaStreamAPI(jsonObject)
    }

    //jsonFormObjectStringify = JSON.stringify(jsonObject);
}

function justMediaAPI(paraData) {
    axios.get(`https://rv-casecomp.herokuapp.com/` + paraData.type)
    .then(res => {
      console.log(res.data);
      filter(res.data, paraData);
    })
    .catch(res => {
      console.log('Error getting API');
    }) 
}

function mediaStreamAPI(paraData) {
    console.log(`https://rv-casecomp.herokuapp.com/` + paraData.type + `?platform=` + paraData.stream);

    axios.get(`https://rv-casecomp.herokuapp.com/` + paraData.type + `?platform=` + paraData.stream)
      .then(res => {
        console.log(res.data);
        filter(res.data, paraData);

      })
      .catch(res => {
        console.log('Error getting API');
      })
}

function filter(apiData, paraData) {

    for (var i = 0; i < apiData.length; i++) {
        if (apiData[i].rating === paraData.rating){
            console.log(apiData[i])
        }
    }
    console.log('Finished filtering!')
}


function Landing() {

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
                <div id="genre-dropdown" className="dropdown" onClick={triggerGenre}>
                    <div className="dropdown-trigger">
                        <button className="button button-size" aria-haspopup="true" aria-controls="dropdown-menu">
                            <div className="button-text-container"><span id="genre-button" className="main-button-name">GENRE</span>
                                <FontAwesomeIcon className="button-arrow icon is-large" icon={faAngleDown} />
                            </div>
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
                                    <FontAwesomeIcon className="button-arrow icon is-large" icon={faAngleDown} /></div>
                        </button>
                    </div>
                    <div className="dropdown-menu" id="dropdown-menu" role="menu">
                        <div id="type" className="dropdown-content">
                            <div onClick={populateForm} className="dropdown-item movie-option">
                                Movie
                            </div>
                            <div onClick={populateForm}className="dropdown-item is-active">
                                Show
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
                                2021
                            </div>
                            <div onClick={populateForm} className="dropdown-item">
                                2020
                            </div>
                            <div onClick={populateForm} className="dropdown-item is-active">
                                2019
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
                            <div onClick={populateForm} className="dropdown-item is-active">
                                Netflix
                            </div>
                            <div onClick={populateForm} className="dropdown-item">
                                HBO Max
                            </div>
                            <div onClick={populateForm} className="dropdown-item">
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

        </section>)
}

export default Landing;