let btn = document.getElementById("btn");

function getFormvalue() {
    let name = document.getElementById("uname").value;
    let lastName = document.getElementById("ulname").value;

    if (name && lastName) {
        alert(`${name} ${lastName}`);
    }
}

btn.addEventListener("click", getFormvalue);
