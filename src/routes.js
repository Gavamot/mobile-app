import React from 'react';
import appPaths from './appPaths'

const page = (item, component, exect) => {
  return {
    ...item,
    component,
    exect : exect === undefined ? true : exect
  }
}

const monitoringFolder = './views/Monitoring';
const DevicesConnnection = React.lazy(() => import(`${monitoringFolder}/DeviceConnection`));
const Gps = React.lazy(() => import(`${monitoringFolder}/Gps`));
const Trend = React.lazy(() => import(`${monitoringFolder}/Trend`));
const VideoPanel = React.lazy(() => import(`${monitoringFolder}/VideoPanel`));
const BrigadePanel = React.lazy(() => import(`${monitoringFolder}/BrigadePanel`));

const catalogFolder = './views/Catalog';
const User = React.lazy(() => import(`${catalogFolder}/User`));
const Department = React.lazy(() => import(`${catalogFolder}/Department/index.tsx`));
const Brigade = React.lazy(() => import(`${catalogFolder}/Brigade`));
const Cluster = React.lazy(() => import(`${catalogFolder}/Cluster`));
const Field = React.lazy(() => import(`${catalogFolder}/Field`));
const Well = React.lazy(() => import(`${catalogFolder}/Well`));
const Work = React.lazy(() => import(`${catalogFolder}/Work`));
const Registrator = React.lazy(() => import(`${catalogFolder}/Registrator`));

const archiveFolder = './views/Archive';
const ArviveBrigade = React.lazy(() => import(`${archiveFolder}/Brigade`));

const adminFolder = './views/Admin';
const Service = React.lazy(() => import(`${adminFolder}/Service`));
const Report = React.lazy(() => import(`${adminFolder}/Report`));
const License = React.lazy(() => import(`${adminFolder}/License`));


const defaultRout = appPaths.navMonitoringDevicesConnnection;
const routes = [
  { path: '/', exact: true, name: '' }
  ,page(defaultRout, DevicesConnnection)
  ,page(appPaths.navMonitoringBrigadePanel, BrigadePanel)
  ,page(appPaths.navMonitoringGps, Gps)
  ,page(appPaths.navMonitoringVideoPanel, VideoPanel)
  ,page(appPaths.navMonitoringTrend, Trend)

  ,page(appPaths.navArchiveBrigade, ArviveBrigade)

  ,page(appPaths.navCatalogUser, User)
  ,page(appPaths.navCatalogDepartment, Department)
  ,page(appPaths.navCatalogBrigade, Brigade)
  ,page(appPaths.navCatalogCluster, Cluster)
  ,page(appPaths.navCatalogField, Field)
  ,page(appPaths.navCatalogWell, Well)
  ,page(appPaths.navCatalogWork, Work)
  ,page(appPaths.navCatalogRegistrator, Registrator)

  ,page(appPaths.navAdminSevice, Service)
  ,page(appPaths.navAdminReport, Report)
  ,page(appPaths.navAdminLicense, License)
];

export default {
  routes,
  defaultRout
};
