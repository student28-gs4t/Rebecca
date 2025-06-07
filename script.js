let name = "Rebecca";
let age = 13;
let likesSushi = true;

function greeting(name) {
    console.log('Hello', name);
}

greeting('Rebecca');

function saveName() {
    let newName = document.getElementById("greeter").value; // text field vaule from the user
    document.getElementById("username").textContent = newName;
    document.getElementById("greeter").value = "";
}
