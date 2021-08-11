import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faExclamationCircle, faTicketAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Link } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import './styles.css';
import axios from 'axios';
import { saveAs } from 'file-saver';
import fs from 'fs';

//var FileSaver = require('file-saver');


//let fs = require("file-system");

//let fs = require('browserify-fs');

// var log4js = require("log4js");
// var logger = log4js.getLogger();
// logger.level = "debug";


let jsonObject = {};

//const writeFileP = require("write-file-p");

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
    let stream = document.getElementById('stream-button').innerHTML;

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
        jsonObject = {
            popOrRand: popOrRand,
            type: type,
            rating: rating,
            year: year,
            stream: stream
        }

        document.getElementById('result').style.display = 'flex';
    }
    console.error(jsonObject);

    if (stream === 'STREAM') {
        justMediaAPI(jsonObject);
    } else {
        mediaStreamAPI(jsonObject);
    }

    //const fs = require('fs')

//     const content = 'Some content!'

// fs.appendFile('logtest.txt', content, err => {
//   if (err) {
//     console.error(err)
//     return
//   }
  //done!
// })

    // var file = new File(["Hello, world!"], "hello world3.txt", {type: "text/plain;charset=utf-8"});
    // // FileSaver.saveAs(file);
    // FileSaver.

//     const { exec } = require('child_process');
// exec('cat *.js bad_file | wc -l', (err, stdout, stderr) => {
//   if (err) {
//     // node couldn't execute the command
//     return;
//   }

//   // the *entire* stdout and stderr (buffered)
//   console.log(`stdout: ${stdout}`);
//   console.log(`stderr: ${stderr}`);
// });

    //logger.debug("Some debug messages");

    // fs.mkdir('/home', function() {
    //     fs.writeFile('/home/logging.txt', 'texting123', function() {
    //         fs.readFile('/home/logging.txt', 'utf-8', function(err, data) {
    //             console.log(data);
    //         });
    //     });
    // }); 

   
        // fs.writeFile('src/components/Landing/logging.txt', 'Hello world!\n', function(err, data) {
        //         console.log("wrote to file");
        // });
    

    //let jsonFormObjectStringify = JSON.stringify(jsonObject);

    //console.log(jsonFormObjectStringify)

    // async function write() {
    //     try {
    //       await fs.writeFile('logging.txt', jsonFormObjectStringify);
    //     } catch (error) {
    //       console.error(`Got an error trying to write to a file: ${error.message}`);
    //     }
    //   }

    //   (async function () {
    //     await write();
    //   })();

    // fs.writeFile('logging.txt', jsonObject, (err) => {
      
    //     // In case of a error throw err.
    //     if (err) throw err;
    // })

    // writeFileP(`${__dirname}/logging.txt`, jsonObject, (err, data) => {
    //     console.log(err || data);
    // });

    // fs.writeFile('src/test.txt', 'aaa', function(err) {})

    return jsonObject;
}

function justMediaAPI(paraData) {
    axios.get(`https://rv-casecomp.herokuapp.com/` + paraData.type)
    .then(res => {
      console.log(res.data);
      var filteredData = filter(res.data, paraData);
      console.log(filteredData);
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
        console.log(filteredData);;
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