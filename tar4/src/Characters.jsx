import { Link } from 'react-router-dom';
import { characters } from './data';

export default function Characters() {
  return (
    <div>
      <ul>
        {characters.map(character => (
          <li key={character.id}>
            <Link style={{ display: 'flex', justifyContent: 'center'  }} to={`/characters/${character.id}`}>{character.name} </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}