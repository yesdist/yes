
(function($) {
    //active menu
    ['index.html', 'about.html', 'services.html', 'work.html', 'contact.html'].map(link => {
        if (window.location.pathname.includes(link)){
            $('.nav-link.active').removeClass('active');
            $(`a.nav-link[href*="${link}"]`).addClass('active');
        }
    })

}).apply(this, [jQuery]);