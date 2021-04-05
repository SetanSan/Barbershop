var link = document.querySelector(".header__login-link")
var popup = document.querySelector(".modal-login")
var close = document.querySelector(".modal-close");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var form = popup.querySelector("form");
var storage = localStorage.getItem("login");
var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("login");
} catch(err) {
    isStorageSupport = false;
}

form.addEventListener("submit", function(evt){
if (!login.value || !password.value) {
    evt.preventDefault();
    
    popup.classList.add("modal-error");
} else {
    if (isStorageSupport){
        localStorage.setItem("login", login.value);
    }
}
evt.preventDefault();

});   

link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    login.focus();
    if (storage) {
        login.value = storage;
        password.focus();
    } else {
        login.focus();
    }
});

close.addEventListener("click", function(evt) {
evt.preventDefault();
popup.classList.remove("modal-show");
popup.classList.remove("modal-error");
});

window.addEventListener("keydown", function (evt){
    if (evt.keyCode === 27) {
        evt.preventDefault;

        if (popup.classList.contains("modal-show")) {
            popup.classList.remove ("modal-show")
        }
    }
})

var mapLink = document.querySelector(".contacts-button-map");

var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (mapPopup.classList.contains("modal-show")) {
            mapPopup.classList.remove("modal-show");
        }
    }
});