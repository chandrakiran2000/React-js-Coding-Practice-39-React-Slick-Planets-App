// Write your code here

import './index.css'

const PlanetItem = props => {
  const {eachPlanet} = props
  const {name, imageUrl, description} = eachPlanet
  return (
    <div className="planet-card">
      <img
        src={imageUrl}
        alt={`planet ${name}`}
        className="planet-card-image"
      />
      <h1 className="planet-card-heading">{name}</h1>
      <p className="planet-card-para">{description}</p>
    </div>
  )
}

export default PlanetItem
