import React from 'react';

import image from 'Images/logo.png';

import './sidebar.scss';
import Dashboard from '../Dashboard/Dashboard';
import Menu from '../Menu/Menu';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import FoodCategory from '../FoodCategory/FoodCategory';
import NewCategory from 'components/NewCategory/NewCategory';
import SettingsComponent from 'components/Setting/SettingsComponent';

const DashboardSidebar = ({ select }) => {
  /* let {search} = useLocation();

  // useEffect(() => {
  //   const query = new URLSearchParams(search);
  //   const parameter = query.get('tab')

  //   if(parseInt(parameter) === 4){
  //     setOption(parseInt(parameter));
  //   }
  // }, [search]) */

  return (
    <>
      <div className="sidebar">
        <div className="logo_content">
          <div className="logo">
            <img src={image} alt="" />
            <div className="logo_name">Foodie</div>
          </div>
          <i className="fa fa-bars" id="menu_btn"></i>
        </div>
        {SidebarData.map((item, index) => {
          return (
            <div className="tab_links" key={index}>
              <SubMenu item={item} selection={select} />
            </div>
          );
        })}
      </div>
      <div className="contents">
        {select === 'dashboard' && <Dashboard />}
        {select === 'menu' && <Menu />}
        {select === 'categories' && <FoodCategory />}
        {select === 'new_categories' && <NewCategory />}
        {select === 'settings' && <SettingsComponent />}
      </div>
    </>
  );
};

export default DashboardSidebar;
