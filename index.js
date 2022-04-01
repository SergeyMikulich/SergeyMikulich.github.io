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
        parent.postMessage(document.getElementById("fname").value,'https://sergeymikulich.github.io');
}
