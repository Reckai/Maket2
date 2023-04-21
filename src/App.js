import './App.css';
import photo from './public/photo.png';
import uni_logo from './public/icons8-university-24.png';
import eng_logo from './public/eng_negate.png';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="mailto:casa101565@gmail.com" className="logo-panel">
          <svg
            className="App-logo"
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none">
            <rect x="0.5" y="0.5" width="43" height="43" rx="21.5" fill="#1A1A1A"></rect>
            <path
              d="M16.1666 17.3333H27.8333V26.6666H16.1666V17.3333ZM17.3333 18.4999V19.2875L22 21.3616L26.6666 19.2875V18.4999H17.3333ZM26.6666 20.5642L22 22.6383L17.3333 20.5642V25.4999H26.6666V20.5642Z"
              fill="#9A9A9A"></path>
            <rect x="0.5" y="0.5" width="43" height="43" rx="21.5" stroke="#242424"></rect>
          </svg>
          <div className="logo-text">Get in Touch</div>
        </a>
        <div className="navigation">
          <a href="https://www.instagram.com/18.seol/">Instagram</a>
          <span>/</span>
          <a href="https://steamcommunity.com/profiles/76561198153677509/">Steam</a>
          <span>/</span>
          <a href="https://github.com/Reckai">Github</a>
        </div>
      </header>
      <div className="elementor-divider">
        <span className="elementor-divider-separator"></span>
      </div>
      <div className="hero-section">
        <div className="container">
          <div className="photo">
            <img src={photo} alt="alt" />
          </div>
          <div className="text">Hi, I am Alexandr</div>
          <h1>
            Junior Front-end Developer <br /> with a passion for development
          </h1>
          <button className="button">Latest Shots</button>
        </div>
        <div className="elementor-divider">
          <span className="elementor-divider-separator"></span>
        </div>
        <div className="element-widget-container">
          <h1 className="element-widget-container-h2">Education</h1>
          <div className="cards-container">
            <div className="card-wrapper">
              <div className="inside-card">
                <div className="icon-card-wrapper">
                  <img src={uni_logo} alt="alt" />
                </div>
                <h2 className="card-h2-wrapper">University</h2>
                <div className="card-text-wrapper">
                  Kharkiv National University of Radio Electronics, NURE
                </div>
              </div>
            </div>
            <div className="card-wrapper">
              <div className="inside-card">
                <div className="icon-card-wrapper">
                  <img src={eng_logo} alt="alt" />
                </div>
                <h2 className="card-h2-wrapper">Fluency in English</h2>
                <div className="card-text-wrapper">My current level of English is B2. And I</div>
              </div>
            </div>
            <div className="card-wrapper">
              <div className="inside-card">
                <div className="icon-card-wrapper" style={{ height: 44 +'px' , width : 44 +'px' }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none">
                    <path
                      d="M32.6885 21.5769V32.3231"
                      stroke="#9A9A9A"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"></path>
                    <path
                      d="M3.75 32.323V15.3153C3.75 14.0884 4.76538 13.073 5.99231 13.073H29.1769"
                      stroke="#9A9A9A"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"></path>
                    <path
                      d="M15.1308 32.323C15.1308 33.1692 15.8077 33.5499 16.6538 33.5499H19.7423C20.5885 33.5499 21.2654 33.1692 21.2654 32.323H35.3115V33.8038C35.3115 34.6922 34.5923 35.4115 33.7038 35.4115H2.60769C1.71923 35.4115 1 34.6922 1 33.8038V32.323H15.1308Z"
                      stroke="#9A9A9A"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"></path>
                    <path
                      d="M10.604 21.5769H13.1425"
                      stroke="#9A9A9A"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"></path>
                    <path
                      d="M7.64258 19.0386L8.91181 20.3078L7.64258 21.577"
                      stroke="#9A9A9A"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"></path>
                    <path
                      d="M7.64258 26.7385H10.181"
                      stroke="#9A9A9A"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"></path>
                    <path
                      d="M11.873 26.7385H15.6807"
                      stroke="#9A9A9A"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"></path>
                    <path
                      d="M7.64258 24.2H12.0849"
                      stroke="#9A9A9A"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"></path>
                    <path
                      d="M13.9888 24.2H16.5272"
                      stroke="#9A9A9A"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"></path>
                    <path
                      d="M18.2192 24.2H21.6039"
                      stroke="#9A9A9A"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"></path>
                    <path
                      d="M37.7657 15.2307L35.2695 16.7961L32.6887 18.4038L30.1503 16.7961L27.6118 15.2307L30.1503 13.623L32.6887 15.2307H32.731L35.2272 13.623L37.7657 15.2307Z"
                      fill="#9A9A9A"></path>
                    <path
                      d="M35.2695 16.7961L37.7657 18.4038L32.6887 21.5769L27.6118 18.4038L30.1503 16.7961"
                      stroke="#9A9A9A"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"></path>
                    <path
                      d="M32.6885 15.2308V15.1885L32.7308 15.2308"
                      stroke="#9A9A9A"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"></path>
                    <path
                      d="M30.1503 13.623L27.6118 15.2307L30.1503 16.7961L32.6887 18.4038L35.2695 16.7961L37.7657 15.2307L35.2272 13.623"
                      stroke="#9A9A9A"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"></path>
                    <path
                      d="M30.1503 13.623L27.6118 12.0576L32.6887 8.88452L37.7657 12.0576L35.2272 13.623L32.731 15.2307H32.6887L30.1503 13.623Z"
                      stroke="#9A9A9A"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"></path>
                  </svg>
                </div>
                <h2 className="card-h2-wrapper">Self education</h2>
                <div className="card-text-wrapper">I improve my skills daily.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-divider">
          <span className="elementor-divider-separator"></span>
        </div>
        <div className='container'>
        
        <h1 className="element-widget-container-h2">Check my Github and write me</h1>
       <div className='footer-buttons'>
       <button className="button">Github</button>
        <button className="button">Get in Touch</button>
       </div>
        </div>
        <div className="elementor-divider">
          <span className="elementor-divider-separator"></span>
        </div>
      </div>
      <footer className="">
      <header className="App-header">
        <h2 className='logo-text'>Alexandr Sergeev</h2>
        <div className="navigation">
          <a href="https://www.instagram.com/18.seol/">Instagram</a>
          <span>/</span>
          <a href="https://steamcommunity.com/profiles/76561198153677509/">Steam</a>
          <span>/</span>
          <a href="https://github.com/Reckai">Github</a>
        </div>
      </header>
      </footer>
    </div>
  );
}

export default App;
