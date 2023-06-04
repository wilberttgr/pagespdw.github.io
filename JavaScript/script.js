// Kalimat salam
var today = new Date();
var hour = today.getHours();
var greeting;

if (hour < 12) {
    greeting = "Selamat pagi, Wilbert.";
} else if (hour < 18) {
    greeting = "Selamat siang, Wilbert.";
} else {
    greeting = "Selamat malam, Wilbert";
}

document.getElementById("greeting").innerHTML = greeting;

// Tanggal dan Jam
function updateDateTime() {
    var now = new Date();

    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var day = days[now.getDay()];

    var date = now.getDate();

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
        'October', 'November', 'December'
    ];
    var month = months[now.getMonth()];

    var year = now.getFullYear();

    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    var time = now.toLocaleTimeString();

    var dateTimeString = day + ', ' + date + ' ' + month + ' ' + year + ' ' + time;

    document.getElementById("datetime").innerHTML = dateTimeString;

    setTimeout(updateDateTime, 1000); // Update every second
}

updateDateTime();