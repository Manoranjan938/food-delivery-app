import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './sidebar.scss';

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);
  return (
    <>
      <Link to={item.path} className="tabs" onClick={item.subNav && showSubnav}>
        <div className="icon_title">
          {item.icon}
          <span className="links_name">{item.title}</span>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </Link>
      {subnav &&
        item.subNav.map((link, index) => {
          return (
            <Link to={link.path} key={index} className="dropdown_link">
              <div className="dropdown">
                {link.icon}
                <span className="links_subnavName">{link.title}</span>
              </div>
            </Link>
          );
        })}
    </>
  );
};

export default SubMenu;
