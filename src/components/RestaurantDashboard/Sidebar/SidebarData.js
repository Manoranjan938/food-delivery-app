export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/restaurants/dashboard',
        icon: <i className="fa fa-tachometer" />
    },
    {
        title: 'Menu',
        path: '/restaurants/menu',
        icon: <i className="fa fa-book" />,
        iconClosed: <i className="fa fa-caret-down" />,
        iconOpened: <i className="fa fa-caret-up" />,
        subNav: [
            {
                title: 'Categories',
                path: '/restaurants/menu/categories',
                icon: <i className="fa fa-eraser" />
            },
            {
                title: 'New Categories',
                path: '/restaurants/menu/new_categories',
                icon: <i className="fa fa-eraser" />
            },
        ]
    },
    {
        title: 'Orders',
        path: '/restaurants/orders',
        icon: <i className="fa fa-list-alt" />,
        iconClosed: <i className="fa fa-caret-down" />,
        iconOpened: <i className="fa fa-caret-up" />,
        subNav: [
            {
                title: 'Order Details',
                path: '/restaurants/menu/categories',
                icon: <i className="fa fa-eraser" />
            },
            {
                title: 'New Categories',
                path: '/restaurants/menu/new_categories',
                icon: <i className="fa fa-eraser" />
            },
        ]
    },
    {
        title: 'Setting',
        path: '/restaurants/setting',
        icon: <i className="fa fa-cog" />
    },
    {
        title: 'Reports',
        path: '/restaurants/reports',
        icon: <i className="fa fa-exclamation-circle" />
    },
    {
        title: 'Share',
        path: '/restaurants/share',
        icon: <i className="fa fa-share-alt" />
    },
]