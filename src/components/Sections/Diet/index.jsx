import React from 'react'
import './style.css'
import diet1 from '../../../assets/diet1.jpg'
import diet2 from '../../../assets/diet2.jpg'
import diet3 from '../../../assets/diet3.jpg'
import diet4 from '../../../assets/diet4.jpg'
import diet5 from '../../../assets/diet5.jpg'
import dietSticker from '../../../assets/dietSticker.png'

function Diet() {
  return (
    <div className="dietSection">
      <div className="dietContainer">
        <div className="dietMain">
          <div className="dietText">
            <div className="dietTitle">
              <div className="dietTitleIcon">
                <img src={dietSticker} alt="dietSticker" />
              </div>
              <div className="dietTitleText">
                <h1>Bunnies diet</h1>
              </div>
            </div>
            <div className="dietTextElement">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
          </div>
        </div>
        <div className="dietGallery">
          <div className="img">
            <img src={diet1} alt="dietImage1" />
          </div>
          <div className="img">
            <img src={diet2} alt="dietImage2" />
          </div>
          <div className="img">
            <img src={diet3} alt="dietImage3" />
          </div>
          <div className="img">
            <img src={diet4} alt="dietImage4" />
          </div>
          <div className="img">
            <img src={diet5} alt="dietImage5" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Diet