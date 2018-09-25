import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <header>
            <div className='emerald-logo'></div>
            <h1>Emerald</h1>
            <h3>Only the finest cannabis extracts and edibles</h3>
            <button className='find-location-btn'>Find a Local Dealer</button>
          </header>
          <div className='divider'></div>

          <section className="intro">
            <p>
              <span className='begining-intro'>Emerald Extracts and Edibles</span> sets the bar in CO2 extraction, concentrates, edibles, and skin care manufacturing. Our experienced staff is proud to offer the industry the best in quality, turn-around times, yield, and customer service. All while continuing to provide our growing number of trade partners with reliable, dependable service.
            </p>
            <br />
            <p>
              With more than 10 years of experience in CO2 extraction and over 2 million grams extracted, we have perfected the process while fortifying our reputation based on good business practices and building strong relationships.
            </p>
            <br />
            <p>
              Unlike many processing companies, <span className='begining-intro'>Emerald Extracts and Edibles</span> never combines batches or material from different operators or cultivations, nor enters into trim-trade agreements. Using current Best Manufacturing Practices, your raw material is turned into the much needed oil to fill your cartridge and dab demand or fuel your growing MIP production needs.
            </p>
          </section>
          <div className='divider'></div>
          <section className='email-signup-section'>
            <h3>Never miss an Emerald update</h3>
            <h5>Sign-up to receive email updates from Emerald</h5>
            <input className='email-input' type='text' placeholder='youremail@email.com' />
          </section>
          <section className='first-offer'>
            <h2>50% OFF YOUR FIRST EXTRACTION ORDER</h2>
            <p>Don't miss out!</p>
            <button className='order-now-btn'>
              Order Now
            </button>
          </section>

          <div className='connect-section'>

            <h3 className='connect-title'>Connect with Us</h3>
            <div className='link-container'>
              <a href='https://www.facebook.com/'
                 className='social-link facebook-link'></a>
              <a href='https://twitter.com/'
                 className='social-link twitter-link'></a>
              <a href='https://www.instagram.com/'
                 className='social-link instagram-link'></a>
            </div>
            <p className='need-help'>
              Need Immediate Help?
            </p>
            <a href='tel:1-720-883-1603'
               className='contact-button call-button'
            >Call</a>

            <a href='mailto:NikolausRB@gmail.com'
              className='contact-button email-button'
            >Email</a>
          </div>


        </main>
        <nav>
          <a href="">Services</a> 
          <a href="">Products</a> 
          <a href="">Order</a> 
          <a href="">Contact</a>
          <a href=""  className='hidden'>About</a>
          <a href="" className='hidden'>Locations</a>
          <a href="" className='hidden'>New Stuff</a>
          <a href="">More</a>
        </nav>
      </div>
    );
  }
}

export default App;
