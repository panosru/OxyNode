var express = require('express');

var app = express.createServer();

app.configure('development', function() {
    app.use(express.vhost('app-ui.design.rnd', require('./apps/main')));
    //app.use(express.vhost('api.design.rnd', require('./apps/api')));
    app.listen(3000);
    console.log("VHost server listening on port %d in %s mode", app.address().port, app.settings.env);
});

/*
app.configure('production', function() {
    app.use(express.vhost('example.com', require('./apps/main')));
    app.use(express.vhost('api.example.com', require('./apps/api')));
    app.listen(80);
});
*/