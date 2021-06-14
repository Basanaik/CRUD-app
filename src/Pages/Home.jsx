import React, { Fragment } from "react";
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { withRouter } from "react-router-dom";


const Home = () => {
  return (
    <Fragment>
      <Carousel infiniteLoop centerMode autoPlay>
        <div>
          <img src="slider images/photo-2.jpg" alt="slider1" />
          <div className="legend">
            <h2>Hero </h2>
            <p className="movie_list">
              <span>Movies</span>
              <span>Kannada</span>
              <span>Comedy</span>
            </p>
            <p>
              A barber’s decision to take revenge on his ex-girlfriend turns
              adventurous after he realises that her husband is a notorious
              gangster.
            </p>
            <p>
              <button>
                <span className="play_icon">
                  <i class="fas fa-play"></i>
                </span>
                Play
              </button>
              <button className="buy_plan">
                <i class="fas fa-crown"></i>
                Buy Plan
              </button>
            </p>
          </div>
        </div>
        <div>
          <img src="slider images/photo-3.jpg" alt="slider2" />
          <div className="legend">
            <h2>Jothe Jotheyali </h2>
            <p className="movie_list">
              <span>Movies</span>
              <span>Kannada</span>
              <span>Comedy</span>
            </p>
            <p className="para">
              Now, viewers in India can watch Jothe Jotheyali episodes before
              their TV telecast on ZEE5! Jothe Jotheyali is a 2019 Kannada
              romantic television serial starring Aniruddha Jatkar as
              Aryavardhan, a 45-year-old businessman, and Megha Shetty as Anu, a
              20-year-old girl. Life brings them together and despite their age
              and mindset differences, they fall in love and get married. But,
              will their marriage stand the test of time?
            </p>
            <p>
              <button>
                <span className="play_icon">
                  <i class="fas fa-play"></i>
                </span>
                Play
              </button>
              <button className="buy_plan">
                <i class="fas fa-crown"></i>
                Buy Plan
              </button>
            </p>
          </div>
        </div>
        <div>
          <img src="slider images/photo-4.jpg" alt="slider3" />
          <div className="legend">
            <h2>Gattimela </h2>
            <p className="movie_list">
              <span>Movies</span>
              <span>Kannada</span>
              <span>Comedy</span>
            </p>
            <p className="para">
              Now, viewers in India can watch Gattimela episodes before their TV
              telecast on ZEE5! Gattimela is a Kannada drama television serial
              about the responsibilities that the protagonists, Vedanth and
              Amulya, share. As time passes, Vedanth starts to develop feelings
              for Amulya but refuses to express it as his reputation is at
              stake.
            </p>
            <p>
              <button>
                <span className="play_icon">
                  <i class="fas fa-play"></i>
                </span>
                Play
              </button>
              <button className="buy_plan">
                <i class="fas fa-crown"></i>
                Buy Plan
              </button>
            </p>
          </div>
        </div>

        <div>
          <img src="slider images/photo-5.jpg" alt="slider4" />
          <div className="legend">
            <h2>Radhe </h2>
            <p className="movie_list">
              <span>Movies</span>
              <span>Kannada</span>
              <span>Comedy</span>
            </p>
            <p className="para">
              Radhe, an invincible cop, is the last hope of a city grappling
              with drug abuse and overrun by criminals. How far will Radhe go to
              bring peace to the city?
            </p>
            <p>
              <button>
                <span className="play_icon">
                  <i class="fas fa-play"></i>
                </span>
                Play
              </button>
            </p>
          </div>
        </div>
        <div>
          <img src="slider images/photo-1.jpg" alt="slider5" />
          <div className="legend">
            <h2>Shadow </h2>
            <p className="movie_list">
              <span>Movies</span>
              <span>Kannada</span>
              <span>Comedy</span>
            </p>
            <p className="para">
              A common man's police complaint about his missing shadow prompts
              the police to reopen the case of a road accident that might have
              been a murder.
            </p>
            <p>
              <button>
                <span className="play_icon">
                  <i class="fas fa-play"></i>
                </span>
                Play
              </button>
              <button className="buy_plan">
                <i class="fas fa-crown"></i>
                Buy Plan
              </button>
            </p>
          </div>
        </div>
      </Carousel>
<div className="jumbotron">
        <h1 className="display-4">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-4" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </div>
    </Fragment>
  );
};
export default withRouter(Home);