import "./App.css";
import gptLogo from "./assets/chatgpt.svg";
import addbtn from "./assets/add-30.png";
import messageIcon from "./assets/message.svg";
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";
import sendBtn from "./assets/send.svg";
import user from "./assets/user-icon.png";
import gptImgLogo from "./assets/chatgptLogo.svg";

const App = () => {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="" className="logo" />
            <span className="brand">ChatGPT</span>
          </div>
          <button className="midBtn">
            <img src={addbtn} alt="" className="addBtn" /> New Chat
          </button>
          <div className="upperSideBottom">
            <button className="query">
              <img src={messageIcon} alt="" />
              What is Programming?
            </button>
            <button className="query">
              <img src={messageIcon} alt="" />
              What is HTML?
            </button>
          </div>
        </div>

        <div className="lowerSide">
          <div className="listItems">
            <img src={home} alt="" className="listItemsImg" />
            Home
          </div>
          <div className="listItems">
            <img src={saved} alt="" className="listItemsImg" />
            Saved
          </div>
          <div className="listItems">
            <img src={rocket} alt="" className="listItemsImg" />
            Upgrade to Pro
          </div>
        </div>
      </div>

      <div className="main">
        <div className="chats">
          <div className="chat">
            <img src={user} alt="" className="chatImg" />
            <p className="txt">
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
              lorem lorem v lorem lorem lorem lorem lorem lorem lorem lorem
              lorem.lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
              lorem lorem lorem v lorem lorem lorem lorem lorem lorem lorem
              lorem lorem.
            </p>
          </div>
          <div className="chat bot">
            <img src={gptImgLogo} alt="" className="chatImg" />
            <p className="txt">
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
              lorem lorem v lorem lorem lorem lorem lorem lorem lorem lorem
              lorem. lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
              lorem lorem lorem v lorem lorem lorem lorem lorem lorem lorem
              lorem lorem.lorem lorem lorem lorem lorem lorem lorem lorem lorem
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
              lorem lorem lorem lorem v lorem lorem lorem lorem lorem lorem
              lorem lorem lorem.
            </p>
          </div>
        </div>

        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder="Send a message" />
            <button className="send">
              <img src={sendBtn} alt="Send" />
            </button>
          </div>
          <p>
            ChatGPT may produce inaccurate information about people, place or
            facts ChatGPT August 20 version.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
