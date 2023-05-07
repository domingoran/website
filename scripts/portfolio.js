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

function appendData(data) {
    for (var i = 0; i < data.length; i++) {
        let text = document.getElementById("ptf");
        text.innerHTML +=
            '<div class="portfolio-item">' +
            '<div class="box1">' +
            '<div class="image">' +
            '<img src= "' + (data[i].image) + '" alt="">' +
            '</div>' +
            '<div class="hover-items">' +
            "<h3>" + data[i].title + "</h3>" +
            '<div class="icons">' +
            '<a href= "' + (data[i].links)[0] + '"class="icon">' +
            '<i class=" ' + (data[i].icons)[0] + '"></i>' +
            '</a>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="box2">' +
            '<div class="portfolio-text">' +
            '<h5>' +
            data[i].genre +
            '</h5>' +
            '<h4>' +
            data[i].title +
            '</h4>' +
            '<p>' +
            data[i].paragraph +
            '</p>' +
            '</div>' +
            '</div>' +
            '</div>'

    }
}
