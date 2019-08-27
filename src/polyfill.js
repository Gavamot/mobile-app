import "core-js";
import "core-js/stable";
import "core-js/es";
import "core-js/features/set";
import "core-js/stable/set";
import "core-js/es/set";
import "core-js/features/set/intersection";
import "core-js/stable/queue-microtask";
import "core-js/es/array/from";
import 'core-js/features/array/from';
import 'core-js/features/array/flat';
import "core-js/proposals/reflect-metadata";
import "core-js/stage/2";
import "core-js/modules/es.array.unscopables.flat";
import "core-js/modules/es.array.unscopables.flat-map";
import "core-js/modules/es.object.from-entries";
import "core-js/modules/esnext.set.difference";
import "core-js/modules/esnext.set.intersection";
import "core-js/modules/esnext.set.is-disjoint-from";
import "core-js/modules/esnext.set.is-subset-of";
import "core-js/modules/esnext.set.is-superset-of";
import "core-js/modules/esnext.set.map";
import "core-js/modules/esnext.set.symmetric-difference";
import "core-js/modules/esnext.set.union";
import "core-js/modules/es.array.includes";
import "core-js/modules/es.array.iterator";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.set";
import 'core-js/modules/es.string.repeat';
import 'core-js/modules/es.object.assign';
import 'core-js/modules/es.object.freeze';
import 'core-js/modules/es.map';
import 'core-js/modules/es.array.map';
import 'core-js/features/promise';
import 'regenerator-runtime/runtime';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

// CustomEvent() constructor functionality in IE9, IE10, IE11
(function () {

  if ( typeof window.CustomEvent === "function" ) return false

  function CustomEvent ( event, params ) {
    params = params || { bubbles: false, cancelable: false, detail: undefined }
    var evt = document.createEvent( 'CustomEvent' )
    evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail )
    return evt
  }
  CustomEvent.prototype = window.Event.prototype
  window.CustomEvent = CustomEvent
})()
