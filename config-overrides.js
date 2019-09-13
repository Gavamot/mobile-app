var path = require('path');

module.exports = function override(config, env) {

  if (!config.resolve){
    config.resolve = {};
  }
  if(!config.resolve.alias){
    config.resolve.alias = {};
  }

  config.resolve.alias.locale = path.resolve(__dirname, 'src/localization/');
  config.resolve.alias.store = path.resolve(__dirname, 'src/store/');
  config.resolve.alias.brouserHistory = path.resolve(__dirname, 'src/history.js');
  config.resolve.alias.settings = path.resolve(__dirname, 'src/settings.js');
  
  return config;
}
