jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/sunshine/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/sunshine/test/integration/pages/App",
	"com/sunshine/test/integration/pages/Settings",
	"com/sunshine/test/integration/pages/Statistics",
	"com/sunshine/test/integration/pages/Home"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "sap.ui.demo.toolpageapp.view."
	});

	sap.ui.require([
		"com/sunshine/test/integration/NavigationJourney"
	], function () {
		QUnit.start();
	});
});