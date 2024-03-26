import React from 'react'
import './style.css'
import bathL from '../../../assets/bathL.jpg'
import bathR from '../../../assets/bathR.jpg'
import bathSticker from '../../../assets/bathSticker.png'

function Bath() {
  return (
    <div className="bathSection">
      <div className="bathContainer">
        <div className="bathImg">
          <div className="bathImgL">
            <img src={bathL} alt="bathL" />
          </div>
          <div className="bathTitle">
          <div className="bathTitleIcon">
            <img src={bathSticker} alt="bathSticker" />
          </div>
          <div className="bathTitleText">
            <h1>Bath Time</h1>
          </div>
        </div>
          <div className="bathImgR">
            <img src={bathR} alt="bathR" />
          </div>
        </div>
        <div className="bathMain">
          <div className="bathText">
            <div className="bathTextElement">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bath