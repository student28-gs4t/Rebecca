let name = "Rebecca";
let age = 13;
let likesSushi = true;

function greeting(name) {
    console.log('Hello', name);
}

greeting('Rebecca');

function saveName() {
    let newName = docuenmt.getElementById("greeter").value; // text field vaule from the user
    document.getElementById("username").textContent = newName;
    document.getElementById("greeter").value = "";
}
document.querySelectorAll('.accordion-header').forEach(function (button) {
    button.addEventListener('click', function () {
        let content = this.nextElementSibling;
        content.style.display = (content.style.display === 'block') ? 'none' :'block';
    });
});
