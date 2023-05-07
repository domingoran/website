fetch('./JSON/blog.json')
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
        let text = document.getElementById("bl");
        text.innerHTML +=
            '<div class="blog">' +
            '<a href="' + data[i].href + '">' +
            '<img src="' + data[i].image + '" alt="">' +
            '<div class="blog-text">' +
            '<h6>' +
            data[i].genre +
            '</h6>' +
            '<h4>' +
            data[i].title +
            '</h4>' +
            '<h5>' +
            data[i].date +
            '</h5>' +
            '<p>' +
            data[i].paragraph +
            '</p>' +
            '</div>' +
            '</a>' +
            '</div>'

    }
}
