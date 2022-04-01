// document.domain = "localhost";
document.getElementById("myForm").onsubmit = function () { myFunction() };

window.addEventListener("message", (event) => {
    const fieldData = event.data;
    if (fieldData !== '')
        var s = document.getElementById("fname");
        s.value = fieldData;
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