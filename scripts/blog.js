
fetch('../JSON/blog.json')
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
    let container = document.getElementById("bl");
    for (let i = 0; i < data.length; i++) {
        container.innerHTML +=
            '<div class="blog">' +
            '<a href="' + data[i].href + '">' +
            '<img src="' + data[i].image + '" alt="' + data[i].alt + '">' +
            '<div class="blog-text">' +
            '<h6>' + data[i].genre + '</h6>' +
            '<h4>' + data[i].title + '</h4>' +
            '<div class="date">' +
            '<h5>' + data[i].date + '</h5>' +
            '</div>' +
            '<p>' + data[i].paragraph + '</p>' +
            '</div>' +
            '</a>' +
            '</div>';
    }
}
