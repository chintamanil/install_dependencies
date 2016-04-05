(function() {

    // node modules
    // hittp://dailyjs.com/tag/linked-hash-map/
    var LinkedHashMap = require('../external/LinkedHashMap/LinkedHashMap');
    var Module = require('../module/module').Module;
    var BaseModule = require('../module/module').BaseModule;

    /**
     * [List command for looping through all the 'Module' and finiding out list of Installed 'Modules']
     */
    function ListCommand() {

        var installed = [];

        // get All 'MODULES' from Base using Closure
        var each;
        var dependencyMap = BaseModule().map();
        for (each in dependencyMap) {
            if (dependencyMap[each].isInstalled()) {
                installed.push(dependencyMap[each].getName());
            }
        }
        return installed.join('\n').concat('\n');
    }

    module.exports = ListCommand;
})();
