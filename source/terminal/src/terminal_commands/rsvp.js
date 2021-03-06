

/*    var pwdCommand = function () {
        var me = {};
        var fs = null;
        me.command= 'pwd';
        me.description= ['Shows current directory.'];
        me.init = ['fileSystem', function (fileSystem) {
            fs = fileSystem;
        }];
        me.handle = function (session) {
            session.output.push({ output: true, text: [fs.path()], breakLine: true });
        }
        return me;
    };
*/




define([], function () {

    return function (module) {

        module.config(['$commandBrokerProvider', function ($commandBrokerProvider, $scope) {

            var RSVPCommandHandler = {};

            RSVPCommandHandler.command = 'RSVP';
            RSVPCommandHandler.description = ['RSVP for the wedding!'];

            RSVPCommandHandler.handle = function (session, cmd) {
                var outText = [];
                outText.push("To continue you will need the RSVP password found on your wedding invitation."+
                    "\n\n  If you make an error you can edit your RSVP by reentering the \"RSVP\" command after you have completed the RSVP proccess"+
                    ", or you can start over by entering the \"exit\" command.");
                session.output.push({ output: true, text: outText, breakLine: true });
            };

            $commandBrokerProvider.appendCommandHandler(RSVPCommandHandler);
        }]);
    };
});