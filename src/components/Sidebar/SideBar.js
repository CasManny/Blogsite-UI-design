import './sidebar.css'

const catergories = ['Life', 'Music','Style', 'Tech', 'Cinema']

const SideBar = () => {
    return (
      <>
        <div className="sidebar">
          <div className="sidebarItem">
            <span className="sidebarTitle">About Me</span>
            <img
              src="https://cdn.pixabay.com/photo/2018/02/16/14/38/portrait-3157821__340.jpg"
              alt=""
              className="sidebarImg"
            />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Temporibus cum itaque, quae repellendus labore facilis ullam eius
              sapiente porro est, eligendi laborum sequi odit inventore ut
              eveniet earum sunt officia suscipit neque magni sit quas
              perspiciatis! Id totam deleniti libero, perferendis cum laboriosam
              repudiandae deserunt alias saepe aliquam neque magnam.
            </p>
          </div>
          <div className="sidebarItem">
            <span className="sidebarTitle">Category</span>
            <ul className="sidebarList">
              {catergories.map((item, index) => (
                <li className="sidebarListItem" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="sidebarItem">
            <span className="sidebarTitle">Follow us</span>
            <div className="sidebarSocial">
              <i class="fab fa-facebook-square"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-pinterest"></i>
              <i class="fab fa-instagram"></i>
            </div>
          </div>
        </div>
      </>
    );
}

export default SideBar;