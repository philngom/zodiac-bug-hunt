import './ZodiacCard.css'

export default function ZodiacCard(props) {
  return (
    <div>
      <div className="zodiac-card">
        <img alt={props.name} src={`./images/${props.name}.png`} />
        <span className="name">{props.name}</span>
        <span>{props.dates}</span>
      </div>
    </div>
  )
}
