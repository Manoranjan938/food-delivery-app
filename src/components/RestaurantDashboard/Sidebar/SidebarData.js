export const SidebarData = [
  {
    name: 'dashboard',
    title: 'Dashboard',
    path: '/restaurants/dashboard',
    icon: <i className="fa fa-tachometer" />,
  },
  {
    name: 'menu',
    title: 'Menu',
    path: '#',
    icon: <i className="fa fa-book" />,
    iconClosed: <i className="fa fa-caret-down" />,
    iconOpened: <i className="fa fa-caret-up" />,
    subNav: [
      {
        name: 'menu',
        title: 'All Menus',
        path: '/restaurants/menu',
        icon: <i className="fa fa-eraser" />,
      },
      {
        name: 'categories',
        title: 'Categories',
        path: '/restaurants/menu/category/lists',
        icon: <i className="fa fa-eraser" />,
      },
      {
        name: 'new categories',
        title: 'New Categories',
        path: '/restaurants/menu/new_categories',
        icon: <i className="fa fa-eraser" />,
      },
    ],
  },
  {
    name: 'orders',
    title: 'Orders',
    path: '#',
    icon: <i className="fa fa-list-alt" />,
    iconClosed: <i className="fa fa-caret-down" />,
    iconOpened: <i className="fa fa-caret-up" />,
    subNav: [
      {
        name: 'orders ',
        title: 'Orders',
        path: '/restaurants/orders',
        icon: <i className="fa fa-eraser" />,
      },{
        name: 'order details',
        title: 'Order Details',
        path: '/restaurants/menu/categories',
        icon: <i className="fa fa-eraser" />,
      },
      {
        name: 'new categories',
        title: 'New Categories',
        path: '/restaurants/menu/new_categories',
        icon: <i className="fa fa-eraser" />,
      },
    ],
  },
  {
    name: 'settings',
    title: 'Setting',
    path: '/restaurants/setting',
    icon: <i className="fa fa-cog" />,
  },
  {
    name: 'reports',
    title: 'Reports',
    path: '/restaurants/reports',
    icon: <i className="fa fa-exclamation-circle" />,
  },
  {
    name: 'share',
    title: 'Share',
    path: '/restaurants/share',
    icon: <i className="fa fa-share-alt" />,
  },
];
