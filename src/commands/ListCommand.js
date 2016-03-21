(function (){

	// node modules
	//http://dailyjs.com/tag/linked-hash-map/
	var LinkedHashMap =  require("../external/LinkedHashMap/LinkedHashMap"); //
	var Module = require("../module/module").Module;
	var BaseModule = require("../module/module").BaseModule;

	/**
	 * Created by IntelliJ IDEA.
	 * User: manil
	 * Date : 22/3/2016
	 * List command for looping through all the "Module" and finiding out list of Installed "Modules"
	 */
	function ListCommand(){

		var installed = [];

		//get All "MODULES" from Base using Closure
		var dependencyMap = BaseModule().map();
		for( var each in dependencyMap){
			if(	dependencyMap[each].isInstalled()	){
				installed.push(	dependencyMap[each].getName()	);
			}
		}
		return installed.join('\n');
	}

	// var map = new LinkedHashMap();
	// map.put("key1", "one");
	// map.put("key2", "two");
	// map.put("key3", "three");

	// // return order is now predictable
	// console.log(map.keys().join(',')); // "key1,key2,key3"
	// console.log(map.values().join(',')); // "one,two,three"

	module.exports = ListCommand;
})();
