(function(){

	//node modules
	var ListCommand = require("./ListCommand");
	var InstallCommand  = require("./InstallCommand");
	var RemoveCommand = require("./RemoveCommand");
	var DependCommand = require("./DependCommand");

	/**
	 * Created by IntelliJ IDEA.
	 * User: manil
	 * Date : 22/3/2016
	 * var commands defines all the commands & its functions
	 * excecute method runs the command
	 */
	function Commands(){
		var commands = {
			LIST			:	 ListCommand,
			DEPEND 		: 	 DependCommand,
			REMOVE 		: 	 RemoveCommand,
			INSTALL 		: 	 InstallCommand
		};
		return {
			execute : function (args ) {
				var arg = args.split(' ');
				var name = arg[0];
				return commands[name] && commands[name]( [].slice.call(arg, 1) );
			}
		};
	}

	module.exports = Commands;

})();
