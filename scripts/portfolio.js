
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

function appendData(data) {
    let container = document.getElementById("ptf");
    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let title = item.title.replace(/\n/g, '<br/>');
        let icons = '';
        for (let j = 0; j < item.icons.length; j++) {
            icons +=
                '<a href="' + item.links[j] + '" class="icon">' +
                '<i class="' + item.icons[j] + '"></i>' +
                '</a>';
        }
        container.innerHTML +=
            '<div class="portfolio-item">' +
            '<div class="box1">' +
            '<div class="image">' +
            '<img src="' + item.image + '" alt="' + item.alt + '">' +
            '</div>' +
            '<div class="hover-items">' +
            '<h3>' + title + '</h3>' +
            '<div class="icons">' + icons + '</div>' +
            '</div>' +
            '</div>' +
            '<div class="box2">' +
            '<div class="portfolio-text">' +
            '<h5>' + item.genre + '</h5>' +
            '<h4>' + title + '</h4>' +
            '<p>' + item.paragraph + '</p>' +
            '</div>' +
            '</div>' +
            '</div>';
    }
}
