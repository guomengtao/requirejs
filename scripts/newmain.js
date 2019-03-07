require.config({
    // baseUrl: '/scripts/',
    urlArgs: "bust=" +  (new Date()).getTime(), // dont use the cache
    paths : {
         
        
        "tools":"/tom/tools"
         
     },
    //  waitSeconds: 0,
    //  scriptType:'text/javascript' ,
     shim :{
        'helper/util': {
            deps: ['helper/tom'],
            exports: 'helper/util'
        },
         
     }
 
     

});
require(["helper/util"  ],function(util){
 
});