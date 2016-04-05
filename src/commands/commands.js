(function() {

    // node modules
    // Need to use Topoligcal Sort for depndency reslution
    var ListCommand = require('./ListCommand');
    var InstallCommand = require('./InstallCommand');
    var RemoveCommand = require('./RemoveCommand');
    var DependCommand = require('./DependCommand');

    /**
     * [Commands description]
     */
    function Commands() {
        var commands = {
            LIST: ListCommand,
            DEPEND: DependCommand,
            REMOVE: RemoveCommand,
            INSTALL: InstallCommand
        };
        return {
            execute: function(args) {
                var arg = args.split(' ');
                var name = arg[0];
                return commands[name] && commands[name]([].slice.call(arg, 1));
            }
        };
    }

    module.exports = Commands;

})();
