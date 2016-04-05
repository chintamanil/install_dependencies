(function() {
    'use strict';
    // node modules

    // http://dailyjs.com/tag/linked-hash-map/
    var LinkedHashMap =  require('../external/LinkedHashMap/LinkedHashMap'); //
    var Module = require('../module/module').Module ;
    var BaseModule = require('../module/module').BaseModule ;

    /**
     * [RemoveCommand  to set 'Module' as installed=false]
     *
     * @param {[Array]} module [description]
     */
    function RemoveCommand(module){
        // passing result to called instance of RemoveCommand
        var result = module[1] || new LinkedHashMap();
        var current = BaseModule().getInstance( module[0] );
        var currentName = current.getName();
        var dependencies, name, arry, each;
        if( !current.hasDependants() ){
            current.setInstalled(false);
            dependencies = current.getDependencies();
            for(each in dependencies){
                if(dependencies.hasOwnProperty(each)){
                    name = dependencies[each].getName();
                    dependencies[each].removeDependant(current);
                    arry = [name, result];
                    RemoveCommand.call(RemoveCommand, arry );
                    current.setInstalled(false);
                }
            }
            result.put(currentName, currentName + ' successfully removed');

        }else{
            result.put(currentName, currentName + ' is still Needed');
        }
        return result.values().join('\n');

    }

    module.exports = RemoveCommand;
})();
