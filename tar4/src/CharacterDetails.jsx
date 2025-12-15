import { useParams, Link } from 'react-router-dom';
import { characters } from './data';

export default function CharacterDetails() {

  const { id } = useParams();

  const character = characters.find(char => char.id === parseInt(id));

  const textColor = character
    ? (character.side === 'Dark' ? 'red' : 'blue')
    : 'black';

  if (!character) {
    return (
      <div >
        <h2>שגיאה 404: דמות לא נמצאה</h2>
        <Link to="/characters">חזור לרשימת הדמויות</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '40px', border: `2px solid ${textColor}`, borderRadius: '8px', textAlign: 'center' }}>
      <h2>{character.name}</h2>
      <strong>character role:</strong> {character.role}<br />
      <strong>character side:</strong>
      <span style={{ color: textColor, fontWeight: 'bold' }}>
        {character.side}
      </span>
      <br />
      <Link to="/characters">חזור לרשימת הדמויות</Link>
    </div>
  );
}