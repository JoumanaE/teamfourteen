webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var mod = __webpack_require__(1);
	// require('./app.config');

	module.exports = {
	  mod: mod
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(2);

	__webpack_require__(4);

	module.exports = angular.module('pimpam', [
	  'pimpam.login'
	]);


/***/ },
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var mod = __webpack_require__(5);

	module.exports = {
	  mod: mod
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(2);
	// webpack dependencies
	// require('angular-resource');
	// require('angular-ui-router');
	// require('angular-material');
	// require('../settings');
	// require('../layout');
	// require('../cptwawo');
	// require('../messaging');
	// require('../dialogs');
	// require('../permissions');

	module.exports = angular.module('pimpam.login', [
	  // angular dependencies
	  // 'ngResource',
	  // 'ui.router',
	  // 'ngMaterial',
	  // 'guts.settings',
	  // 'guts.layout',
	  // 'guts.cptwawo',
	  // 'guts.messaging',
	  // 'guts.dialogs',
	  // 'guts.permissions'
	]);


/***/ }
]);