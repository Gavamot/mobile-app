import polyglot from './localization'
import appPaths from './appPaths'
import { get } from 'https';

const getTitel = (title) => {
  return {
    title: true,
    name: polyglot.t(title),
    wrapper: {            // optional wrapper object
      element: '',        // required valid HTML5 element tag
      attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
    },
    class: ''             // optional class names space delimited list for title item ex: "text-center"
  }
};

const getItem = (item, icon) => {
  return {
    ...item,
    url : item.path,
    icon
  }
}

const getItemWithChildren = (title, icon, ...children) => {
  return {
    name: polyglot.t(title),
    icon,
    children
  }
}

const nav = {
  items: [
    getTitel('nav.monitoringTitle')
      ,getItem(appPaths.navMonitoringDevicesConnnection, 'icon-screen-desktop')
      ,getItem(appPaths.navMonitoringBrigadePanel, 'icon-map')
      ,getItem(appPaths.navMonitoringGps, 'icon-compass')
      ,getItem(appPaths.navMonitoringVideoPanel, 'icon-camrecorder')
      ,getItem(appPaths.navMonitoringTrend, 'icon-graph')

    ,getTitel('nav.archiveTitle')
      ,getItem(appPaths.navArchiveBrigade, 'icon-chart')

    ,getTitel('nav.otherTitle')
    ,getItemWithChildren('nav.catalogTitle', 'icon-notebook'
        ,getItem(appPaths.navCatalogDepartment, 'fa fa-bank')
        ,getItem(appPaths.navCatalogField, 'fa fa-object-group')
        ,getItem(appPaths.navCatalogCluster, 'fa fa-map')
        ,getItem(appPaths.navCatalogWell, 'fa fa-tachometer')
        ,getItem(appPaths.navCatalogBrigade, 'fa fa-group')
        ,getItem(appPaths.navCatalogWork, 'fa fa-gavel')
        ,getItem(appPaths.navCatalogRegistrator, 'fa fa-cogs')
        ,getItem(appPaths.navCatalogUser, 'fa fa-user')
    )

    ,getTitel('nav.adminTitle')
      ,getItem(appPaths.navAdminSevice, 'fa fa-server')
      ,getItem(appPaths.navAdminReport, 'fa fa-file-text')
      ,getItem(appPaths.navAdminLicense, 'fa fa-money')
  ],
};

export default nav;
