export const navItems = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  }
  ,
  {
    title: true,
    name: 'Request For Quote',
    variant: 'info'
  },
  {
    name: 'Create New Quote',
    url: '/RoutA',
    icon: 'icon-note'
  },
  {
    name: 'Quotes List',
    url: '/RFQHeaderList',
    icon: 'icon-layers'
  },
  {
    name: 'Product Configurator',
    url: '/RoutA',
    icon: 'icon-list'
  },
  {
    title: true,
    name: 'Planner Menu'
  },
  {
    name: 'Review Pending RFQ',
    url: '/TBD',
    icon: 'icon-equalizer'
  },
  {
    name: 'Query Oracle Data',
    url: '/pages',
    icon: 'icon-diamond',
    children: [
      {
        name: 'Oracle and SCO Products',
        url: '/tbd',
        icon: 'icon-star'
      },
      {
        name: 'Oracle Customers',
        url: '/tbd',
        icon: 'icon-star'
      }
    ]
  },
  // {
  //   name: 'Pages',
  //   url: '/pages',
  //   icon: 'icon-star',
  //   children: [
  //     {
  //       name: 'Login',
  //       url: '/login',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Register',
  //       url: '/register',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Error 404',
  //       url: '/404',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Error 500',
  //       url: '/500',
  //       icon: 'icon-star'
  //     }
  //   ]
  // },
  
  // {
  //   name: 'Download CoreUI',
  //   url: 'http://coreui.io/angular/',
  //   icon: 'icon-cloud-download',
  //   class: 'mt-auto',
  //   variant: 'success'
  // },
  // {
  //   name: 'Try CoreUI PRO',
  //   url: 'http://coreui.io/pro/angular/',
  //   icon: 'icon-layers',
  //   variant: 'danger'
  // }
];
