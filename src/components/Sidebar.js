import { FaBars, FaHome, FaSearch, FaMusic, FaHeart, FaPlus } from 'react-icons/fa';
import { RiRadioLine } from 'react-icons/ri';
import { BsSoundwave, BsMusicNoteList } from 'react-icons/bs';
import { MdLibraryMusic } from 'react-icons/md';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../styles/Sidebar.css';

const Sidebar = ({ isCollapsed, toggleSidebar, activeLink, handleActiveLink }) => {
  return (
    <div
      className="text-dark sidebar p-3"
      style={{
        width: isCollapsed ? '90px' : '250px',
        transition: 'width 0.3s',
        minHeight: '100vh',
        backgroundColor: '#1abc9c',
      }}
    >
      {/* Logo and Toggle Button */}
      <div className="d-flex align-items-center justify-content-between mb-4 logo">
        <h2 className="text-light d-flex align-items-center">
          <BsSoundwave className="me-2" />
          {!isCollapsed && 'Pamodzie'}
        </h2>
        <FaBars
          onClick={toggleSidebar}
          className="text-light"
          style={{ cursor: 'pointer' }}
        />
      </div>

      {/* Sidebar Menu */}
      <div className="MenuContainer">
        <ul className="list-unstyled">
          <p style={{ fontSize: '21px', fontWeight: 'bold', marginLeft: '-8px' }}>Menu</p>
          {[
            { name: 'home', icon: FaHome, label: 'Home' },
            { name: 'search', icon: FaSearch, label: 'Search' },
            { name: 'albums', icon: MdLibraryMusic, label: 'Albums' },
            { name: 'songs', icon: FaMusic, label: 'Songs' },
            { name: 'radio', icon: RiRadioLine, label: 'Radio' }
          ].map((item) => (
            <li
              key={item.name}
              className={`p-2 ${activeLink === item.name ? 'active' : ''}`}
              onClick={() => handleActiveLink(item.name)}
            >
              <a href="#" className="d-flex align-items-center text-light">
                <item.icon className="me-2" /> {!isCollapsed && item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Playlist Section */}
      <div className="MenuContainer">
        <ul className="list-unstyled">
          <p style={{ fontSize: '21px', fontWeight: 'bold', marginLeft: '-8px' }}>
            Playlists
          </p>
          {[
            { name: 'favorite', icon: FaHeart, label: 'Favorite' },
            { name: 'weeklyTop10', icon: BsMusicNoteList, label: 'Weekly Top 10' },
            { name: 'monthly', icon: BsMusicNoteList, label: 'Monthly Top 100' }
          ].map((item) => (
            <li
              key={item.name}
              className={`p-2 ${activeLink === item.name ? 'active' : ''}`}
              onClick={() => handleActiveLink(item.name)}
            >
              <a href="#" className="d-flex align-items-center text-light">
                <item.icon className="me-2" /> {!isCollapsed && item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
