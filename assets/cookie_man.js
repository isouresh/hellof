function setCookie(name, value, daysToExpire) {
    var expires = "";
    if (daysToExpire) {
        var date = new Date();
        date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
    }
document.cookie = name + "=" + value + expires + "; path=/";
}

        // Function to get a cookie by name
function getCookie(name) {
    var nameEQ = name + "=";
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
         while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
         if (cookie.indexOf(nameEQ) == 0) {
            return cookie.substring(nameEQ.length, cookie.length);
         }
    }
            return null;
}
 function setValue(value, cookie) {
            setCookie(cookie, value, 365)
}
