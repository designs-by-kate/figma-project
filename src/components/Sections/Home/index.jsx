import React from 'react'
import './style.css'
import home1 from '../../../assets/home1.jpg'
import home2 from '../../../assets/home2.jpg'
import home3 from '../../../assets/home3.jpg'
import home4 from '../../../assets/home4.jpg'
import homeMain from '../../../assets/homeMain.jpg'
import homeSticker from '../../../assets/homeSticker.png'

function Home() {
  return (
    <div className="homeSection">
      <div className="homeContainer">
        <div className="homeMain">
          <div className="homeText">
            <div className="homeTitle">
              <div className="homeTitleIcon">
                <img src={homeSticker} alt="homeSticker" />
              </div>
              <div className="homeTitleText">
                <h1>Bunnies Home</h1>
              </div>
            </div>
            <div className="homeTextElement">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
          </div>
          <div className="homeImgMain">
            <img src={homeMain} alt="homeImageMain" />
          </div>
        </div>
        <div className="homeGallery">
          <div className="img">
            <img src={home1} alt="homeImage1" />
          </div>
          <div className="img">
            <img src={home2} alt="homeImage2" />
          </div>
          <div className="img">
            <img src={home3} alt="homeImage3" />
          </div>
          <div className="img">
            <img src={home4} alt="homeImage4" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home