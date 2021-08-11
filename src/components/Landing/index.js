import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faExclamationCircle, faTicketAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Link } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import './styles.css';
import axios from 'axios';


let jsonObject = {};

export let cards = [];

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

let stream;

const submitForm = event => {
    const popOrRand = event.target.id;
    const type = document.getElementById('type-button').innerHTML;
    const rating = document.getElementById('rating-button').innerHTML;
    const year = document.getElementById('year-button').innerHTML;
    stream = document.getElementById('stream-button').innerHTML;

    //make it readable to the api
    let streamObj = {
        "Netflix" : 'netflix',
        "HBO Max" : 'hbo',
        "Amazon Prime Video" : 'amazon_prime',
        "STREAM" : "STREAM"
    }
    stream = streamObj[stream];

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

        console.log(jsonObject);

        if (stream === 'STREAM') {
            justMediaAPI(jsonObject);
        } else {
            mediaStreamAPI(jsonObject);
        }

        document.getElementById('result').style.display = 'flex';
        return jsonObject;
    }
    console.log(jsonObject);

    if (stream === 'STREAM') {
        justMediaAPI(jsonObject);
    } else {
        mediaStreamAPI(jsonObject);
    }

    
    //jsonFormObjectStringify = JSON.stringify(jsonObject);
}

function justMediaAPI(paraData) {
    axios.get(`https://rv-casecomp.herokuapp.com/` + paraData.type)
    .then(res => {
      console.log(res.data);
      var filteredData = res.data;
      if (paraData.type === 'Movie') {
          filteredData = filter(res.data, paraData);
      };
      console.log(filteredData);
      console.log("filteredData",filteredData)
      getMovieCards(filteredData);
      
      console.log("movie card", cards);
      return filteredData;
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
        var filteredData = filter(res.data, paraData);
        console.log(filteredData);
        console.log("filteredData",filteredData)
        getMovieCards(filteredData);
        console.log("movie card", cards);
        return filteredData;
      })
      .catch(res => {
        console.log('Error getting API');
      })
}

function filter(apiData, paraData) {
    var result = [];
    var i = 0;
    if (paraData.year !== 'YEAR' && paraData.rating !== 'RATING') {
        for (i = 0; i < apiData.length; i++) {
            if (apiData[i].release_date.substring(0, 3) === paraData.year.substring(0, 3) && apiData[i].rating === paraData.rating) {
                result.push(apiData[i]);
                // console.log(apiData[i]);
            }
        }
    } else if (paraData.year !== 'YEAR') {
        for (i = 0; i < apiData.length; i++) {
            if (apiData[i].release_date.substring(0, 3) === paraData.year.substring(0, 3)){
                result.push(apiData[i]);
                // console.log(apiData[i]);
            }
        }
    } else if (paraData.rating !== 'RATING') {
        for (i = 0; i < apiData.length; i++) {
            if (apiData[i].rating === paraData.rating){
                result.push(apiData[i]);
                // console.log(apiData[i]);
            }
        }
    } else {
        result = apiData;
    }
    
    console.log('Finished filtering!');
    return result;
}

async function getMovieCards(movies) {

    for(let i = 0; i < movies.length; i++) {

        
        cards.push(<div value={ MovieCard(movies[i]) } />);
    }
}

async function MovieCard(movie) {
    let streamLink;
    if(movie.streaming_platform[0] == "netflix") {
        streamLink = "https://www.netflix.com/";
    }
    if(movie.streaming_platform[0] == "hbo") {
        streamLink = "https://www.hbomax.com/";
    }
    if(movie.streaming_platform[0] == "amazon_prime") {
        streamLink = "https://www.amazon.com/Prime-Video/b?node=2676882011";
    }

    console.log("movie", movie);
    cards.push(
        `<section className="movies">
            <div className="main-header">
                <h1 className="title">${movie.title}</h1>
                <h3 className="year">${movie.release_date} ${movie.rating}</h3>
                <h4>Vote Average: ${movie.vote_average}</h4>
                <h4><a href="https://www.imdb.com/title/${movie.imdb}">IMDB Page</a></h4>
                <h4>Production Companies: ${movie.production_companies}</h4>
                <h4>${movie.overview}</h4>
                <h4><a href="${streamLink}">Stream Now!</a></h4>
            </div>
        </section>`
    )      
};

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
                            <div onClick={populateForm} className="dropdown-item is-active">
                                2010s
                            </div>
                            <div onClick={populateForm} className="dropdown-item">
                                2000s
                            </div>
                            <div onClick={populateForm} className="dropdown-item">
                                1990s
                            </div>
                            <div onClick={populateForm} className="dropdown-item">
                                1980s
                            </div>
                            <div onClick={populateForm} className="dropdown-item">
                                1970s
                            </div>
                            <div onClick={populateForm} className="dropdown-item">
                                1960s
                            </div>
                            <div onClick={populateForm} className="dropdown-item">
                                1950s
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
                <div id="result" className="main-results-container"><Link to="/results"><button className="button results pop-rand">SEE RESULTS</button></Link></div>
            </section>)
    }
}

export default Landing;