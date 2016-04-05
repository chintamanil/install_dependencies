(function() {
    // Node modules
    var HashSet = require('hashset');

    // private var
    var dependencyMap = {};

   /**
    * [BaseModule Abstract module to access dependencyMap]
    */
    function BaseModule() {
        return {
            map: function() {
                return dependencyMap;
            },
            getInstance: function(name) {
                if (dependencyMap[name]) {
                    return dependencyMap[name];
                }
                return false;
            }
        };
    }

   /**
    * [Module  :to crete instance based on name.]
    *
    * @param {[string]} name [name of dependency]
    */
    function Module(name) {
        if (!dependencyMap[name]) {
            this.name = name;

            //  _ is sudo private  can use closure for real private instead of using closure
            this._ = {
                'installed': false,
                'dependencies': new HashSet(),
                'depandants': new HashSet()
            };

            dependencyMap[name] = this;
        }
        return dependencyMap[name];
    }

    Module.prototype = {
        getInstance: function(name) {
            // check name type
            var target = dependencyMap[name];
            if (!target) {
                target = new Module(name);
                dependencyMap[name] = target;
            }
            return target;
        },

        getName: function() {
            return this.name;
        },

        isInstalled: function() {
            return this._.installed;
        },

        setInstalled: function(value) {
            // check type
            this._.installed = value;
        },

        getDependencies: function() {
            return this._.dependencies.toArray();
        },

        hasDependencies: function() {
            return this._.dependencies.length > 0;
        },

        addDependancy: function(dependancy) {
            return this._.dependencies.add(dependancy);
        },

        getDependants: function() {
            return this._.depandants;
        },

        hasDependants: function() {
            return this._.depandants.length > 0;
        },

        addDependants: function(dependant) {
            return this._.depandants.add(dependant);
        },

        removeDependant: function(val) {
            return this._.depandants.remove(val);
        },

        equals: function(obj) {
            //  check type of Modlule
            return this.name === obj.name;
        },

        toString: function() {
            return this.name;
        },

        getAllDependancies: function() {
            return this._.dependencies.toArray();
        },

        getAllDependants: function() {
            return this._.dependants.toArray();
        },

        getAll: function() {
            return dependencyMap;
        },

        getInstalled: function() {
            var installed = [];
            var each;
            for (each in dependencyMap) {
                if (dependencyMap[each].isInstalled()) {
                    installed.push(dependencyMap[each].name);
                }
            }
            return installed;
        }

    };

    module.exports = {
        Module: Module,
        BaseModule: BaseModule

    };

})();
