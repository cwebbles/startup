import React from 'react';
import './about.css'

export function About() {
    const [quote, setQuote] = React.useState('')

    React.useEffect(() => {
        getInspirationalQuote()
    }, [])

  return (
    <main className='container-fluid text-center'>
      <div id="picture"><img width="400px" className="picture-box" src="https://www.pcgamesn.com/wp-content/sites/pcgamesn/2023/08/starfield-ship-1.jpg" alt="The Frontier" /></div>

      <div className="about-content">     
        <p>
          The Starfield&reg; Starlog is a place for explorers to record their adventures in the frontier. The starfield is a vast place, and it is important
          as an explorer to keep tabs on your friends and their adventures. The Starfield&reg; Starlog is a place to do just that.
        </p>

        <p>
          The name Starfield&reg; is a registered trademark of Bethesda Game Studios. My use of the name and the game is for non-profit
          educational use only. I have no idea if I'm going to go to court for this.
        </p>

        <div id="quote">{quote}</div>
      </div>
    </main>
  );

    function getInspirationalQuote() {
        fetch("https://api.quotable.io/random")
            .then((response) => response.json())
            .then((data) => {
                setQuote(data.content + ' - Ad Astra')
            })
    }

    function checkActiveUsers() {
      const username = localStorage.getItem('username');
      const password = localStorage.getItem('password');
      if (!username || !password) {
          window.location.href = "/";
      }
  }
}