$(document).ready(function () {
    document.title = "Un sito un pò barboso - Organizations";
    $('#table_organizations').DataTable({
        ajax: {
            url: 'https://62aae044371180affbdc214a.mockapi.io/organizations',
            dataSrc: ''
        },
        columns: [
            {
                data: 'id', render: function (data, type) {
                    return `<a role="button" href="/employees.html" class="btn btn-link">${data}</a>`;
                }
            },
            {data: 'name'},
            {data: 'addresses'},
            {data: 'contacts'},
            {data: 'ndipendenti'},
            {
                data: 'id', render: function (data, type) {
                    return '<div class="dropdown">' +
                        '<button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">' +
                        '<i class="fa-solid fa-ellipsis-vertical"></i>' +
                        '</button>' +
                        '<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">' +
                        '<li><a class="dropdown-item" href="/employees.html">Detail</a></li>' +
                        '<li><a class="dropdown-item" href="#">Another action</a></li>' +
                        '<li><a class="dropdown-item" href="#">Something else here</a></li>' +
                        '</ul>' +
                        '</div>';
                }
            },
        ],
    });
})
