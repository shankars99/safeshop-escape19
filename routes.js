(function(){

    //inclusion of router(handler) files
    var homeHandler = require('./handlers/homeHandler');
    var loginHandler = require('./handlers/loginHandler');
    var signupHandler = require('./handlers/signupHandler');

	module.exports = function(app){
        app.post("/home",homeHandler.handleView);
        app.post("/api/home",homeHandler.handleApi)

        app.post("/login",loginHandler.handleView);
        app.post("/api/login",loginHandler.handleApi)

        app.post("/signup/*",signupHandler.handleView);
        app.post("/api/signup/*",signupHandler.handleApi)
	};
})();
