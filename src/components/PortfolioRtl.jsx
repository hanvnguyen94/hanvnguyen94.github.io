import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery } from "react-photoswipe-gallery";
import Modal from "react-modal";
import ignite from '../assets/projects_screenshots/ignite.jpg'
import beatMaker from '../assets/projects_screenshots/beatMaker.jpg'
import musicPlayer from '../assets/projects_screenshots/jam.jpg'
import momentum from '../assets/projects_screenshots/momentum.png'
import ticTacToe from '../assets/projects_screenshots/ticTacToe.png'
import yelpLoo from '../assets/projects_screenshots/yelpLoo.png'


const PortfolioRtl = () => {
  // for popup video
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  // for modal
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }

  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }

  function toggleModalFive() {
    setIsOpen5(!isOpen5);
  }
  function toggleModalSix() {
    setIsOpen6(!isOpen6);
  }

  return (
    <>
      <Gallery>
        <div className="tokyo_tm_portfolio">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>Projects</span>
                <h3>Portfolio</h3>
              </div>
            </div>
          </div>
          {/* END TOKYO_TM_TITLE */}

          <div className="portfolio_filter">
            <Tabs>
              <TabList>
                <Tab>Projects</Tab>
              </TabList>
              {/* END TABLIST */}
              <div className="list_wrapper">
                <TabPanel>
                  <ul className="portfolio_list">
                    <li data-aos="fade-right" data-aos-duration="1200">
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src={ignite}
                            alt="Ignite Project"
                            onClick={toggleModalOne}
                          />
                        </div>
                        <div className="mobile_title">
                          <h3>Ignite</h3>
                          <span>Live Demo</span>
                        </div>
                      </div>
                    </li>
                    {/* END IGNITE */}
                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="100"
                    >
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src={musicPlayer}
                            alt="Music Player"
                            onClick={() => setIsOpen2(true)}
                          />
                        </div>
                        <div className="mobile_title">
                          <h3>Music Player</h3>
                          <span>Live Demo</span>
                        </div>
                      </div>
                    </li>
                    {/* END YOUTUBE */}

                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="100"
                    >
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src={beatMaker}
                            alt="Beat Maker"
                            onClick={() => setIsOpen3(true)}
                          />
                        </div>
                        <div className="mobile_title">
                          <h3>Beat Maker</h3>
                          <span>Live Demo</span>
                        </div>
                      </div>
                    </li>
                    {/* END SHOT */}

                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="100"
                    >
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src={momentum}
                            alt="Momentum"
                            onClick={() => setIsOpen4(true)}
                          />
                        </div>
                        <div className="mobile_title">
                          <h3>Momentum</h3>
                          <span>Live Demo</span>
                        </div>
                      </div>
                    </li>
                    {/* END SHOT */}

                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="100"
                    >
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src={yelpLoo}
                            alt="yelpLoo"
                            onClick={toggleModalFive}
                          />
                        </div>
                        <div className="mobile_title">
                          <h3>Yelp Loo</h3>
                          <span> Live Demo</span>
                        </div>
                      </div>
                    </li>
                    {/* END DETAILS */}
                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="200"
                    >
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src={ticTacToe}
                            alt="ticTacToe"
                            onClick={toggleModalSix}
                          />
                        </div>
                        <div className="mobile_title">
                          <h3>ticTacToe</h3>
                          <span> Live Demo</span>
                        </div>
                      </div>
                    </li>
                    {/* END DETAILS */}
                  </ul>
                  {/* END PORTFOLIO LIST */}
                </TabPanel>
                {/* END ALL All */}

                <TabPanel>
                  <ul className="portfolio_list">
                    <li data-aos="fade-right" data-aos-duration="1200">
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src={ignite}
                            alt="Ignite"
                            onClick={() => setIsOpen(true)}
                          />
                        </div>
                        <div className="mobile_title">
                          <h3>Ignite</h3>
                          <span>Live Demo</span>
                        </div>
                      </div>
                    </li>
                    {/* END VIMEO */}
                  </ul>
                  {/* END PORTFOLIO LIST */}
                </TabPanel>
                {/* END VIMEO VIDEO */}

              </div>
              {/* END LIST WRAPPER */}
            </Tabs>
          </div>
        </div>
      </Gallery>

      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="mymodal  "
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalOne}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable rtl-p">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${ignite})`,
                  }}
                ></div>
              </div>
              {/* END IMAGE */}

              <div className="portfolio_main_title">
                <h3>Ignite</h3>
                <p>Click to live demo <a target="_blank" rel="noreferrer" href="https://www.hanvsolo.com/ignite/">Deployed Site</a></p>
                
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                  Games information app built with React hooks and Redux to enhance user interface to give the most updated games info from rawg.io api.
                  </p>
                  
                </div>
              </div>
              {/* main_details */}

            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>        

      <Modal
        isOpen={isOpen2}
        onRequestClose={toggleModalTwo}
        contentLabel="My dialog"
        className="mymodal  "
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalTwo}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable rtl-p">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${musicPlayer})`,
                  }}
                ></div>
              </div>
              {/* END IMAGE */}

              <div className="portfolio_main_title">
                <h3>Music Player</h3>
                <p>Click to live demo <a target="_blank" rel="noreferrer" href="https://www.hanvsolo.com/jam-player/">Deployed Site</a></p>
                
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                  Feeling like you need a chill playlist for better concentration on your coding daily tasks? Check out my chillhop playlist as link below.
                  </p>
                  
                </div>
              </div>
              {/* main_details */}

            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>                       

      <Modal
        isOpen={isOpen3}
        onRequestClose={toggleModalThree}
        contentLabel="My dialog"
        className="mymodal  "
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalThree}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable rtl-p">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${beatMaker})`,
                  }}
                ></div>
              </div>
              {/* END IMAGE */}

              <div className="portfolio_main_title">
                <h3>Beat Maker</h3>
                <p>Click to live demo <a target="_blank" rel="noreferrer" href="https://www.hanvsolo.com/the-beat-maker/">Deployed Site</a></p>
                
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                  Simple browser application engineerd with vanilla JavaScript.
                  </p>
                  
                </div>
              </div>
              {/* main_details */}

            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>                       

      <Modal
        isOpen={isOpen4}
        onRequestClose={toggleModalFour}
        contentLabel="My dialog"
        className="mymodal  "
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalFour}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable rtl-p">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${momentum})`,
                  }}
                ></div>
              </div>
              {/* END IMAGE */}

              <div className="portfolio_main_title">
                <h3>Momentum</h3>
                <p>Click to live demo <a target="_blank" rel="noreferrer" href="https://www.hanvsolo.com/momentum-clone-client/#/">Deployed Site</a></p>
                
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                  .My first React Client Site built as a clone of the famous Chrome extension "Momentum"
                 It will generate new quotes, pictures and also trigger weather base on provided zip code everytime you visit.

                  </p>
                  
                </div>
              </div>
              {/* main_details */}

            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>                       

      <Modal
        isOpen={isOpen5}
        onRequestClose={toggleModalFive}
        contentLabel="My dialog"
        className="mymodal  "
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalFive}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable rtl-p">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${yelpLoo})`,
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>Yelp Loo</h3>
                <span>Under construction</span>
                <p>Click to live demo <a target="_blank" rel="noreferrer" href="https://www.hanvsolo.com/yelp-loo-client/#/">Deployed Site</a></p>
                

              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  
                  <p>
                  This full-stack application can be viewed as a clone of Yelp.com. It has two resources which are user and loos.
                  The user will be able to create an account and organize their "public bathroom" online, which stores all related information like photos and addresses
                  </p>
                  
                </div>
              </div>
              {/* main_details */}

            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}

      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpen6}
        onRequestClose={toggleModalSix}
        contentLabel="My dialog"
        className="mymodal  "
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalSix}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable rtl-p">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${ticTacToe})`,
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>Tic Tac Toe</h3>
                <p>Click to live demo <a target="_blank" rel="noreferrer" href="https://www.hanvsolo.com/tic-tac-toe-client/">Deployed Site</a></p>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                  .My first Tic-Tac-Toe game project created with Javascript and jQuery This application allows user to play Tic-Tac-Toe against themself
                  </p>
                </div>
              </div>
              {/* main_details */}
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>

      {/* testing */}

      
      {/* END MODAL FOR PORTFOLIO DETAILS */}
    </>
  );
};

export default PortfolioRtl;
