// This configures the local development server. 
// Not needed for the application itself.
module.exports = {
   "port": 9001,
   "online": false,
   "localOnly" : true,
   "ui" : false,
   "server": {
    "baseDir": ["./dist","./src","."],
    "middleware" : {
      0 : null
    },

  }
}