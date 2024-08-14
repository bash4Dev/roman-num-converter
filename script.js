const numInput = document.getElementById("number").value;
const output = document.getElementById("output");
const convertBtn = document.getElementById("convert-btn");

output.style.visibility = "hidden";

const convertNum = () => {
    output.style.visibility = "visible";

}

convertBtn.addEventListener("click", convertNum);