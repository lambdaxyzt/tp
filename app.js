var proxy = require("node-tcp-proxy");
 
var newProxy = proxy.createProxy(8080, "127.0.0.1" ,  9090, {
    upstream: function(context, data) {
        return data;
    }
});