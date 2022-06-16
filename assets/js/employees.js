$(document).ready(function () {
    document.title = "Un sito un pò barboso - Employees";
    $('#table_employees').DataTable({
        ajax: {
            url: 'https://62aae044371180affbdc214a.mockapi.io/Employees',
            dataSrc: ''
        },
        columns: [
            {
                data: 'id', render: function (data, type) {
                    return `<a role="button" href="/tizio-barbuto.html?id=${data}" class="btn btn-link">${data}</a>`;
                }
            },
            {data: 'name'},
            {data: 'surname'},
            {data: 'fiscalcode'},
            {data: 'email'},
            {data: 'workingposition'},
            {data: 'hoursmonth'},
            {
                data: 'assumption', render: function (data, type) {
                    return new Date(data).toLocaleString();
                }
            },
            {
                data: 'id', render: function (data, type) {
                    return '<div class="dropdown">' +
                        '<button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">' +
                        '<i class="fa-solid fa-ellipsis-vertical"></i>' +
                        '</button>' +
                        '<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">' +
                        `<li><a class="dropdown-item" href="/tizio-barbuto.html?id=${data}">Details</a></li>` +
                        '<li><a class="dropdown-item" href="#">Another action</a></li>' +
                        '<li><a class="dropdown-item" href="#">Something else here</a></li>' +
                        '</ul>' +
                        '</div>';
                }
            },
        ],
    });
})
