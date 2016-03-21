(function(){
	//node moudules

	//http://dailyjs.com/tag/linked-hash-map/
	var LinkedHashMap =  require("../external/LinkedHashMap/LinkedHashMap"); //
	var Module = require("../module/module").Module ;
	var BaseModule = require("../module/module").BaseModule ;

	/**
	 * Created by IntelliJ IDEA.
	 * User: manil
	 * Date : 22/3/2016
	 * Summary: INstall Command sets the installed vaue ot true for the Module which is paased (args[0])
	 */
	function InstallCommand(args){
		var result = args[1] || new LinkedHashMap();
		var current = BaseModule().getInstance( args[0] );
		var currentName = current.getName();
		var dependencies, name, each ,arry;
		if(! current.isInstalled() ){
			current.setInstalled(true);

			dependencies = current.getDependencies();
			for(each in dependencies){
				if(dependencies.hasOwnProperty(each)){
					name = dependencies[each].getName();
					arry = [name, result];
					InstallCommand.call(InstallCommand, arry	);
				}
			}
			result.put(currentName, currentName + " successfully installed");

		}
		else{
			result.put(currentName, currentName + " is already installed");
		}
		return result.values().join("\n").concat("\n");
	}
	module.exports = InstallCommand;
})();
