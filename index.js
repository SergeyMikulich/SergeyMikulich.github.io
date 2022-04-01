// document.domain = "localhost";
document.getElementById("myForm").onsubmit = function () { myFunction() };

window.addEventListener("message", (event) => {
    if (event.origin !== "http://example.org:8080")
        return;

}, false);

function myFunction() {
    document.querySelector('#insert-button').onclick = event => {
        const element = event.target.closest('.title_spoiler');

        if (element) {
            const frame = element.nextElementSibling;
            const link = frame.dataset.src;

            frame.setAttribute('src', link);
            frame.removeAttribute('data-src');
        }
    }
}