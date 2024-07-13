// Write your code here
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  return (
    <div className="planet-slider-card" data-testid="planets">
      <h1 className="heading-card-text">PLANETS</h1>
      <div className="slider-container">
        <Slider>
          {planetsList.map(eachPlanet => (
            <PlanetItem eachPlanet={eachPlanet} key={eachPlanet.id} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PlanetsSlider
