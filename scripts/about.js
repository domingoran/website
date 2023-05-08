
const getCookie = (name) => {
    const value = " " + document.cookie;
    console.log("value", `==${value}==`);
    const parts = value.split(" " + name + "=");
    return parts.length < 2 ? undefined : parts.pop().split(";").shift();
};

const setCookie = function (name, value, expiryDays, domain, path, secure) {
    const exdate = new Date();
    exdate.setHours(
        exdate.getHours() +
        (typeof expiryDays !== "number" ? 365 : expiryDays) * 24
    );
    document.cookie =
        name +
        "=" +
        value +
        ";expires=" +
        exdate.toUTCString() +
        ";path=" +
        (path || "/") +
        (domain ? ";domain=" + domain : "") +
        (secure ? ";secure" : "");
};
(() => {


    const NecCookies = "cookielawinfo-checkbox-necessary";
    setCookie(NecCookies, "Accepted");

    const $cookiesBanner = document.querySelector(".cookies-eu-banner");
    const $cookiesBanner2 = document.querySelector(".cookie-settings");
    const $cookiesBannerButton = document.querySelector(".btn.accept");
    const $cookiesBannerButtonCancel = document.querySelector(".btn.cancel");
    const $cookiesBannerButtonChange = document.querySelector(".cookie-settings");
    const cookieName = "cookielawinfo-checkbox-non-necessary";
    const hasCookie = getCookie(cookieName);

    if (!hasCookie) {
        $cookiesBanner.classList.remove("hidden");
        $cookiesBanner2.classList.add("hidden");
    }

    $cookiesBannerButton.addEventListener("click", () => {
        setCookie(cookieName, "Accepted");
        location.reload();
    });
    $cookiesBannerButtonCancel.addEventListener("click", () => {
        setCookie(cookieName, "Rejected");
        location.reload();
    });
    $cookiesBannerButtonChange.addEventListener("click", () => {
        setCookie(cookieName, "");
        location.reload();
    });




})();


if (getCookie("cookielawinfo-checkbox-non-necessary") == "Accepted") {
    let text = document.getElementById("pl");
    text.innerHTML += '<iframe class="spoti" style="border-radius:12px"src="https://open.spotify.com/embed/playlist/0byyubJsGr6Iu4cerPq0fh?utm_source=generator"width="100%" height="370" frameBorder="0" allowfullscreen=""allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"loading="lazy"></iframe>'

}


fetch('./JSON/portfolio.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log(err);
    });

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function appendData(data) {
    n = getRndInteger(0, data.length)
    if (getCookie("cookielawinfo-checkbox-non-necessary") == "Rejected" || getCookie("cookielawinfo-checkbox-non-necessary") == "") {
        let text = document.getElementById("pl");
        text.innerHTML += '<h4> This is one of my projects, take a look!</h4>' +
            '<div class="portfolio-item">' +
            '<div class="image">' +
            '<img src= "' + (data[n].image) + '" alt="">' +
            '</div>' +
            '<div class="hover-items">' +
            "<h3>" + data[n].title + "</h3>" +
            '<div class="icons">' +
            '<a href= "' + (data[n].links)[0] + '"class="icon">' +
            '<i class=" ' + (data[n].icons)[0] + '"></i>' +
            '</a>' +
            '</div>' +
            '</div>' +
            '</div>'
    }
}
