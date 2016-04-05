(function() {
    // node modules

    // http:// dailyjs.com/tag/linked-hash-map/

    var Module = require('../module/module').Module;

    /**
     *  Dependancy command :: arguments[0] is parents arguments(1 .. n-1) are the depndancies
     * need to add  arguments[0] as depandant to  arguments(1 .. n-1)
     *
     * @param {[type]} argsList [description]
     */
    function DependCommand(argsList) {
        var deepName = argsList[0];

        // // // // // // // // // // // // // // // // // // //
        //  create new instance based on name //
        // // // // // // // // // // // // // // // // // // //

        var current = new Module(deepName);
        var length = argsList.length;
        var i, dependancy;
        for (i = 1; i < length; i++) {
            //  create new instance based on name
            dependancy = new Module(argsList[i]);

            //  add depedancy to parent/current
            current.addDependancy(dependancy);

            //  need to add  arguments[0] as depandant to  arguments(1 .. n-1)
            dependancy.addDependants(current);
        }
        return '';
    }

    module.exports = DependCommand;
})();
