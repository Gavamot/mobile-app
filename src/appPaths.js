import polyglot from './localization'

let path = (name, path) => {
  return {
    name: polyglot.t(name),
    path
  }
};

export default{

   navMonitoringDevicesConnnection : path('nav.monitoring.devicesConnnection', '/monitoring/devicesConnnection')
  ,navMonitoringBrigadePanel : path('nav.monitoring.brigadePanel', '/monitoring/brigadePanel')
  ,navMonitoringGps : path('nav.monitoring.gps', '/monitoring/gps')
  ,navMonitoringVideoPanel : path('nav.monitoring.videoPanel', '/monitoring/videoPanel')
  ,navMonitoringTrend : path('nav.monitoring.trends', '/monitoring/trend')

  ,navArchiveBrigade : path('nav.archive.brigade', '/archive/brigade')

  ,navCatalogUser : path('nav.catalog.user', '/catalog/user')
  ,navCatalogDepartment : path('nav.catalog.department', '/catalog/department')
  ,navCatalogBrigade : path('nav.catalog.brigade', '/catalog/brigade')
  ,navCatalogCluster : path('nav.catalog.cluster', '/catalog/cluster')
  ,navCatalogField : path('nav.catalog.field', '/catalog/field')
  ,navCatalogWell : path('nav.catalog.well', '/catalog/well')
  ,navCatalogWork : path('nav.catalog.work', '/catalog/work')
  ,navCatalogRegistrator : path('nav.catalog.registrator', '/catalog/registrator')

  ,navAdminSevice : path('nav.admin.service', '/admin/service')
  ,navAdminReport : path('nav.admin.report', '/admin/report')
  ,navAdminLicense : path('nav.admin.license', '/admin/license')
}
