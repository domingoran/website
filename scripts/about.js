
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
    {
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
