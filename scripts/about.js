
fetch('../JSON/portfolio.json')
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
        let title = data[n].title.replace(/\n/g, '<br/>');
        let icons = '';
        for (let j = 0; j < data[n].icons.length; j++) {
            icons +=
                '<a href="' + data[n].links[j] + '" class="icon">' +
                '<i class="' + data[n].icons[j] + '"></i>' +
                '</a>';
        }
        text.innerHTML += '<h4> This is one of my projects, take a look!</h4>' +
            '<div class="portfolio-item">' +
            '<div class="box1">' +
            '<div class="image">' +
            '<img src="' + data[n].image + '" alt="' + data[n].alt + '">' +
            '</div>' +
            '<div class="hover-items">' +
            '<h3>' + title + '</h3>' +
            '<div class="icons">' + icons + '</div>' +
            '</div>' +
            '</div>' +
            '<div class="box2">' +
            '<div class="portfolio-text">' +
            '<h5>' + data[n].genre + '</h5>' +
            '<h4>' + title + '</h4>' +
            '<p>' + data[n].paragraph + '</p>' +
            '</div>' +
            '</div>' +
            '</div>'
    }
}
