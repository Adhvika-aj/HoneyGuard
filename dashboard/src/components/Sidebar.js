import { useLocation } from 'react-router-dom';
import _nav from '../_nav';

const Sidebar = () => {
  const location = useLocation();
  
  // Update active states based on current route
  const updatedNav = _nav.map(item => ({
    ...item,
    active: item.to === location.pathname
  }));

  return (
    <div className="sidebar">
      {updatedNav.map((item, index) => (
        <div key={index} className={`sidebar-item ${item.active ? 'active' : ''}`}>
          {item.name}
        </div>
      ))}
    </div>
  );
}; 

export default Sidebar; 