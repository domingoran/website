// const getCookie = (name) => {
//     const value = " " + document.cookie;
//     console.log("value", `==${value}==`);
//     const parts = value.split(" " + name + "=");
//     return parts.length < 2 ? undefined : parts.pop().split(";").shift();
// };

// const setCookie = function (name, value, expiryDays, domain, path, secure) {
//     const exdate = new Date();
//     exdate.setHours(
//         exdate.getHours() +
//         (typeof expiryDays !== "number" ? 365 : expiryDays) * 24
//     );
//     document.cookie =
//         name +
//         "=" +
//         value +
//         ";expires=" +
//         exdate.toUTCString() +
//         ";path=" +
//         (path || "/") +
//         (domain ? ";domain=" + domain : "") +
//         (secure ? ";secure" : "");
// };
// (() => {


//     const NecCookies = "cookielawinfo-checkbox-necessary";
//     setCookie(NecCookies, "Accepted");

//     const $cookiesBanner = document.querySelector(".cookies-eu-banner");
//     const $cookiesBanner2 = document.querySelector(".cookie-settings");
//     const $cookiesBannerButton = document.querySelector(".btn.accept");
//     const $cookiesBannerButtonCancel = document.querySelector(".btn.cancel");
//     const $cookiesBannerButtonChange = document.querySelector(".cookie-settings");
//     const cookieName = "cookielawinfo-checkbox-non-necessary";
//     // const cookiega = "_ga";
//     // const cookiega2 = "_ga_733CXGLTH2";
//     const hasCookie = getCookie(cookieName);

//     if (!hasCookie) {
//         $cookiesBanner.classList.remove("hidden");
//         $cookiesBanner2.classList.add("hidden");
//     }

//     $cookiesBannerButton.addEventListener("click", () => {
//         setCookie(cookieName, "Accepted");
//         // window.dataLayer = window.dataLayer || [];
//         // function gtag() { dataLayer.push(arguments); }
//         // gtag('js', new Date());
//         // gtag('config', 'G-733CXGLTH2');
//         $cookiesBanner.classList.add("hidden");
//         $cookiesBanner2.classList.remove("hidden");
//         location.reload();
//     });
//     $cookiesBannerButtonCancel.addEventListener("click", () => {
//         setCookie(cookieName, "Rejected");
//         $cookiesBanner.classList.add("hidden");
//         $cookiesBanner2.classList.remove("hidden");
//         // location.reload();
//     });
//     $cookiesBannerButtonChange.addEventListener("click", () => {
//         setCookie(cookieName, "");
//         // setCookie(cookiega, "");
//         // setCookie(cookiega2, "");
//         $cookiesBanner.classList.remove("hidden");
//         $cookiesBanner2.classList.add("hidden");
//         location.reload();
//     });




// })();


