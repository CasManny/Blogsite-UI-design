import './topbar.css'
import { Link } from 'react-router-dom'

const links = [
  {
    url: '/',
    link: 'Home'
  },
  {
    url: '/about',
    link: 'about'
  },
  {
    url: '/writepost',
    link: 'write'
  },
  {
    url: '/contact',
    link: 'contact'
  },
]

const Topbar = () => {
  return (
    <>
      <div className="top">
        <div className="topLeft">
          <i class="fab fa-facebook-square"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-pinterest"></i>
          <i class="fab fa-instagram"></i>
        </div>
        <div className="topCenter">
          <ul className="topList">
            {links.map((item, index) => (
              <Link to={item.url} className='topListItem'>{item.link}</Link>
            ))}
          </ul>
        </div>
        <div className="topRight">
          <Link to='/settings'>

          <img
            src="https://cdn.pixabay.com/photo/2022/01/20/17/51/office-desk-6952919__340.jpg"
            alt="profile pic"
            className="profile-image"
          />
          </Link>
          <i class="fas fa-search"></i>
        </div>
      </div>
    </>
  );
};

export default Topbar;
