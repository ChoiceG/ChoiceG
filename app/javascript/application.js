// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "popper"
import "bootstrap"

import "main"
import "typedjs";
import "typed_effect";


// Wait for the window to load completely
window.onload = function () {
    // After the page is fully loaded, hide the spinner
    var spinner = document.getElementById('spinner');
    if (spinner) {
        spinner.classList.remove('show');
        spinner.classList.add('hide');
    }
};
// export { application };


