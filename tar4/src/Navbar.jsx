import { NavLink } from "react-router-dom";

export default function Navbar() {

   const linkStyle = ({ isActive }) => ({
    color: isActive ? 'red' : 'black', 
    fontWeight: isActive ? 'bold' : 'normal',
    margin: '0 15px',
    padding: '5px',
  });

    return (
        <div style={{ display: 'flex', justifyContent: 'center'  }}>
        <NavLink to= '/' style={linkStyle}>בית</NavLink> 
        <NavLink to= '/about'  style={linkStyle}>אודות</NavLink> 
        <NavLink to= '/characters' style={linkStyle}>דמיות</NavLink> 
     </div>
    )
}
