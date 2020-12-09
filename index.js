let x = 1;
const increment = () => {
    document.getElementById("counter").innerHTML = x;
    x += 1;
}

const decrement = () => {
    x -= 1;
    if (x == 0) {
        x = 0;
        alert("please stop");
    }

    document.getElementById("counter").innerHTML = x;

}