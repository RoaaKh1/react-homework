import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{
      padding: '50px',
      textAlign: 'center',
      backgroundColor: 'rgba(214, 36, 36, 1)',
      minHeight: '80vh'
    }}>
      <h1>404: דף לא נמצא </h1>
      <p>הדף שאתה מחפש לא קיים </p>
      <Link to="/" style={{ color: '#007bff', fontWeight: 'bold' }}>
        חזור למסך הבית 
      </Link>
    </div>
  );
}