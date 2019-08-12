import "core-js";
// polyfill only stable `core-js` features - ES and web standards:
import "core-js/stable";
// polyfill only stable ES features:
import "core-js/es";
// if you want to polyfill `Set`:
// all `Set`-related features, with ES proposals:
import "core-js/features/set";
// stable required for `Set` ES features and features from web standards
// (DOM collections iterator in this case):
import "core-js/stable/set";
// only stable ES features required for `Set`:
import "core-js/es/set";
// if you want to polyfill just required methods:
import "core-js/features/set/intersection";
import "core-js/stable/queue-microtask";
import "core-js/es/array/from";

// polyfill reflect metadata proposal:
import "core-js/proposals/reflect-metadata";
// polyfill all stage 2+ proposals:
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

import 'regenerator-runtime/runtime';
/*
* required polyfills
*/
// import "core-js";
// import 'core-js/features/set/map';

// /** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol'
// import 'core-js/es6/object'
// import 'core-js/es6/function'
// import 'core-js/es6/parse-int'
// import 'core-js/es6/parse-float'
// import 'core-js/es6/number'
// import 'core-js/es6/math'
// import 'core-js/es6/string'
// import 'core-js/es6/date'
// import 'core-js/es6/array'
// import 'core-js/es6/regexp'
// import 'core-js/es6/map'
// import 'core-js/es6/weak-map'
// import 'core-js/es6/set'
// import 'core-js/es7/object'

// /** IE10 and IE11 requires the following for the Reflect API. */
//  import 'core-js/es6/reflect'

/** Evergreen browsers require these. **/
// Used for reflect-metadata in JIT. If you use AOT (and only Angular decorators), you can remove.
// import 'core-js/es7/reflect'

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
