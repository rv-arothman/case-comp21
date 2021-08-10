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
                            <div className="button-text-container"><span className="main-button-name">GENRE</span>
                                <span className="icon is-small">
                                    <FontAwesomeIcon className="button-arrow" icon={faAngleDown} />
                                </span></div>
                        </button>
                    </div>
                    <div className="dropdown-menu" id="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                            <a href="edenchou.com" className="dropdown-item">
                                Dropdown item
                            </a>
                            <a href="edenchou.com" className="dropdown-item">
                                Other dropdown item
                            </a>
                            <a href="edenchou.com" className="dropdown-item is-active">
                                Active dropdown item
                            </a>
                        </div>
                    </div>
                </div>
                <div id="year-dropdown" className="dropdown" onClick={triggerYear}>
                    <div className="dropdown-trigger">
                        <button className="button button-size" aria-haspopup="true" aria-controls="dropdown-menu">
                            <div className="button-text-container"><span className="main-button-name">YEAR</span>
                                <span className="icon is-small">
                                    <FontAwesomeIcon icon={faAngleDown} />
                                </span></div>
                        </button>
                    </div>
                    <div className="dropdown-menu" id="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                            <a href="edenchou.com" className="dropdown-item">
                                Dropdown item
                            </a>
                            <a href="edenchou.com" className="dropdown-item">
                                Other dropdown item
                            </a>
                            <a href="edenchou.com" className="dropdown-item is-active">
                                Active dropdown item
                            </a>
                        </div>
                    </div>
                </div>
                <div id="stream-dropdown" className="dropdown" onClick={triggerStream}>
                    <div className="dropdown-trigger">
                        <button className="button button-size" aria-haspopup="true" aria-controls="dropdown-menu">
                            <div className="button-text-container"><span className="main-button-name">STREAM</span>
                                <span className="icon is-small">
                                    <FontAwesomeIcon icon={faAngleDown} />
                                </span></div>
                        </button>
                    </div>
                    <div className="dropdown-menu" id="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                            <a href="edenchou.com" className="dropdown-item">
                                Dropdown item
                            </a>
                            <a href="edenchou.com" className="dropdown-item">
                                Other dropdown item
                            </a>
                            <a href="edenchou.com" className="dropdown-item is-active">
                                Active dropdown item
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-show-me">
                <span className="show-me">SHOW ME SOMETHING...</span>
            </div>
            <div className="main-pop-rand">
                <button className="button pop-rand">POPULAR</button>
                <button className="button pop-rand">RANDOM</button>
            </div>
        </section>)
}

export default Landing;