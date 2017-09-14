export default {
  items: [{
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer'
    },
    {
      name: 'Wbl',
      url: '/wbl',
      icon: 'icon-speedometer'
    },
    {
      name: 'Components',
      url: '/components',
      icon: 'icon-puzzle',
      children: [{
          name: 'Child',
          url: '/components/child',
          icon: 'icon-speedometer',
        },
        {
          name: 'Child1',
          url: '/components/child1',
          icon: 'icon-speedometer',
        }
      ]
    }
  ]
}
