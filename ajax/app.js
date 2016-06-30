$(document).ready(function() {
    console.log("jQuery loaded!");
    $.ajax({
        type: 'GET',
        url: 'data.json',
        success: function(clients) {
            for (var i = 0, len = clients.length; i < len; i++) {
                console.log("Fullname : " + clients[i].fullname + "Email : " + clients[i].email);
            }
        }
    });

})

