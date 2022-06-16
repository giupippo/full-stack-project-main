document.addEventListener('DOMContentLoaded', function () {
    document.title = "Un sito un pò barboso - Tizio barbuto";
    const sidebarLinks = document.querySelectorAll('#sidebar-links a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            const activeLink = document.querySelector('#sidebar-links a.active');
            activeLink.classList.remove('active');

            link.classList.add('active');
        })
    })

    window.onscroll = () => {
        let current = "";

        sidebarLinks.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // TODO: fix condition
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute("href");
            }
        });

        sidebarLinks.forEach((li) => {
            li.classList.remove("active");
            if (li.getAttribute("href") === current) {
                li.classList.add("active");
            }
        });
    };

    const {createApp} = Vue
    createApp({
        data() {
            return {
                detail: {}
            }
        },
        methods: {
            formatDate(dateString) {
                if (dateString) {
                    const date = new Date(dateString);
                    return new Intl.DateTimeFormat('default', {dateStyle: 'long'}).format(date);
                }
                return '';
            }
        },
        mounted() {
            const params = new Proxy(new URLSearchParams(window.location.search), {
                get: (searchParams, prop) => searchParams.get(prop),
            });
            let detail_id = params.id;
            if (!detail_id) {
                location.href = '/employees.html'
            } else {
                axios.get(`https://62aae044371180affbdc214a.mockapi.io/Employees/${detail_id}/tizioBarbuto`)
                    .then(response => {
                        this.detail = response.data[0];
                    })
            }
        }
    }).mount('#app');


});

