(function(){
	//node modules

	//http://dailyjs.com/tag/linked-hash-map/
	var LinkedHashMap =  require("../external/LinkedHashMap/LinkedHashMap"); //
	var Module = require("../module/module").Module;
	var BaseModule = require("../module/module").BaseModule;

	/**
	 * Created by IntelliJ IDEA.
	 * User: manil
	 * Date : 22/3/2016
	 * Dependancy command :: arguments[0] is parents arguments(1 .. n-1) are the depndancies
	 * need to add  arguments[0] as depandant to  arguments(1 .. n-1)
	 */
	function DependCommand(argsList){
		var deepName = argsList[0] ;

		//create new instance based on name
		var current = new Module(deepName);
		var length = argsList.length;
		var i, dependancy;
		for(i = 1 ; i < length ; i++){
			//create new instance based on name
			dependancy =  new Module( argsList[i] );

			//add depedancy to parent/current
			current.addDependancy(dependancy);

			//need to add  arguments[0] as depandant to  arguments(1 .. n-1)
			dependancy.addDependants(current);
		}
		return "" ;
	}



	module.exports = DependCommand;
})();
