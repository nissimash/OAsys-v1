export const navItems = [
  // {
  //   name: 'Dashboard',
  //   url: '/dashboard',
  //   icon: 'icon-speedometer',
  //   badge: {
  //     variant: 'info',
  //     text: 'NEW'
  //   }
  // }
  // ,
  {
    title: true,
    name: 'Request For Quote',
    variant: 'info'
  },
  {
    name: 'Login',
    url: '/Login',
    icon: 'icon-login'
  },

  // {
  //   name: 'Dashboard',
  //   url: '/Dashboard',
  //   icon: 'icon-dashboard'
  // },
  // {
  //   name: 'Create New Quote',
  //   url: 'RFQHeader',
  //   icon: 'icon-note'
  // },
  {
    name: 'Quotes List',
    url: '/RFQHeaderList',
    icon: 'icon-layers'
  },
  {
    name: 'Product Configurator',
    url: '/ProductConfig',
    icon: 'icon-list'
  },
  {
    name: 'User Menu',
    title: true
  },
  {
    name: 'Change Password',
    url: '/ChangePassword',
    icon: 'icon-refresh'
  },
  {
    title: true,
    name: 'Planner Menu'
  },
  {
    name: 'Review Pending RFQ',
    url: '/RFQPlanner',
    icon: 'icon-equalizer'
  },
  {
    name: 'Finance Pending RFQ',
    url: '/RFQFinance',
    icon: 'icon-equalizer',
  },
  {
    name: 'Query Oracle Data',
    url: '/pages',
    icon: 'icon-diamond',
    children: [
      {
        name: 'Oracle and SCO Products',
        url: '/PartsList',
        icon: 'icon-star'
      },
      {
        name: 'Oracle Customers',
        url: '/CostomerRegister',
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
