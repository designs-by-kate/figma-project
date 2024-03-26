import React from 'react'
import './style.css'
import playMain from '../../../assets/playMain.jpg'
import playSticker from '../../../assets/playSticker.png'

function Play() {
  return (
    <div className="playSection">
      <div className="playContainer">
        <div className="playMain">
          <div className="playText">
            <div className="playTitle">
              <div className="playTitleIcon">
                <img src={playSticker} alt="playSticker" />
              </div>
              <div className="playTitleText">
                <h1>Play Time</h1>
              </div>
            </div>
            <div className="playTextElement">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
          </div>
          <div className="playImgMain">
            <img src={playMain} alt="playImageMain" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Play