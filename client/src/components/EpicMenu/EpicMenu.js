import React, { Component } from "react";

class EpicMenu extends Component {
  render() {
    return (
      <nav className="menu">
        <div className="menu__right">
          <ul className="menu__list">
            <li className="menu__list-item">
              <a className="menu__link menu__link--active" href="/">
                Home
              </a>
            </li>
            <li className="menu__list-item">
              <a className="menu__link" href="/profile">
                Profile
              </a>
            </li>
            <li className="menu__list-item">
              <p
                className="item"
                style={{ textAlign: "center", fontSize: "40px" }}
              >
                <strong>MicroBoss</strong>
              </p>
            </li>
          </ul>

          {/* <button className="menu__search-button"></button> */}

          <form className="menu__search-form hide" method="POST">
            <input
              className="menu__search-input"
              placeholder="Type and hit enter"
            />
          </form>
        </div>
      </nav>
    );
  }
}

export default EpicMenu;
