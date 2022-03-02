/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"state_of_michigan/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
