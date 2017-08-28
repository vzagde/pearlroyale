var app = {

    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function(){

        // alert('dic is ready');

        app.receivedEvent('deviceready');

    },

    // Update DOM on a Received Event
    receivedEvent: function(id){

        console.log('Received Event: ' + id);

        document.addEventListener("backbutton", this.onBackKeyDown, false);

    },
    onBackKeyDown: function(){
        // alert($('.pageid:visible').attr('data-include'));
        if($('.pageid:visible').attr('data-include') == "login" || $('.pageid:visible').attr('data-include') == "home"){
            navigator.app.exitApp();
        }
        // alert('back clicked');
        // alert($('.pageid').attr('data-include'));
        // console.log('Received Event: ' + id);
        // document.addEventListener("backbutton", onBackKeyDown, false);
    }
};


function backdisabled(){
    document.addEventListener("backbutton", onBackKeyDown, false);
}


// function onBackKeyDown(e) {

//     alert('Back Clicked');

//     // console.log("<==BACKBUTTON FIRES==>");

//     // console.log('helo');
//     // $(this).attr('data-include');



// }


app.initialize();