import { SideBar } from "../../components";
import './settings.css'

const Settings = () => {
    return (
      <div className="settingsContainer">
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update your account</span>
            <span className="settingsDeleteTitle">Delete Account</span>
          </div>
          <form action="" className="settingsForm">
            <label>Profile picture</label>
            <div className="settingsPP">
              <img
                src="https://cdn.pixabay.com/photo/2018/02/16/14/38/portrait-3157821__340.jpg"
                alt=""
              />
              <label htmlFor="fileInput">
                <i class="far fa-user-circle settingsPPIncon"></i>
              </label>
              <input type="file" id='fileInput' style={{display: 'none'}} />
            </div>
            <label>Username</label>
            <input type="text" placeholder="Username" />
            <label>Email</label>
            <input type="text" placeholder="Email" />
            <label>Password</label>
            <input type="password" placeholder='password' />
            <button className="settingsSubmit">Update</button>
          </form>
        </div>
        <SideBar />
      </div>
    );
}

export default Settings;