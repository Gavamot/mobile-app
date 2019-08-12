export default {
  items: [
    // {
    //   name: 'Dashboard',
    //   url: '/dashboard',
    //   icon: 'icon-speedometer',
    //   badge: {
    //     variant: 'info',
    //     text: 'Vasia',
    //   },
    // },
    {
      title: true,
      name: 'Мониторинг',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Соединение устройств',
      url: '/theme/colors',
      icon: 'icon-screen-desktop',
    },
    {
      name: 'Панель бригад',
      url: '/theme/typography',
      icon: 'icon-map',
    },
    {
      name: 'GPS-позиционирование',
      url: '/theme/desktop',
      icon: 'icon-compass',
    },
    {
      name: 'Видеопанель',
      url: '/theme/desktop2',
      icon: 'icon-camrecorder',
    },
    {
      name: 'Тренды',
      url: '/theme/desktop3',
      icon: 'icon-graph',
    },
    {
      title: true,
      name: 'Архивы',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Архив по бригаде',
      url: '/theme/desktop4',
      icon: 'icon-chart',
    },
    // {
    //   name: 'Buttons',
    //   url: '/buttons',
    //   icon: 'icon-cursor',
    //   children: [
    //     {
    //       name: 'Buttons',
    //       url: '/buttons/buttons',
    //       icon: 'icon-cursor',
    //     },
    //     {
    //       name: 'Button dropdowns',
    //       url: '/buttons/button-dropdowns',
    //       icon: 'icon-cursor',
    //     },
    //     {
    //       name: 'Button groups',
    //       url: '/buttons/button-groups',
    //       icon: 'icon-cursor',
    //     },
    //     {
    //       name: 'Brand Buttons',
    //       url: '/buttons/brand-buttons',
    //       icon: 'icon-cursor',
    //     },
    //   ],
    // },
    // {
    //   name: 'Download CoreUI',
    //   url: 'https://coreui.io/react/',
    //   icon: 'icon-cloud-download',
    //   class: 'mt-auto',
    //   variant: 'success',
    //   attributes: { target: '_blank', rel: "noopener" },
    // },
    // {
    //   name: 'Try CoreUI PRO',
    //   url: 'https://coreui.io/pro/react/',
    //   icon: 'icon-layers',
    //   variant: 'danger',
    //   attributes: { target: '_blank', rel: "noopener" },
    // },
  ],
};
