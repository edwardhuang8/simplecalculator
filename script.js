const createcalc = document.getElementsByClassName("createCalc")[0];
const calculation = document.getElementsByClassName("Calc")[0];
const storage = document.getElementsByClassName("Storage")[0];

function show() {
    calculation.style.display = "block";
}

function hide() {
    calculation.style.display = "none";
}

function addition() {
    var fnumber = document.getElementById("fnumber").value;
    var snumber = document.getElementById("snumber").value;

    var add = parseFloat(fnumber) + parseFloat(snumber);
    
    var node0 = document.createElement("div");
    var node1 = document.createElement("h2");

    node1.innerHTML = add;
    
    node0.appendChild(node1);

    node0.setAttribute("style", "background: white; width: 20%; padding: 15px; border: 1px gray; margin: 15px;");

    storage.insertAdjacentElement("beforeend", node0);

    document.getElementById("fnumber").value = "";
    document.getElementById("snumber").value = "";
}                            

function subtraction() {
    var fnumber = document.getElementById("fnumber").value;
    var snumber = document.getElementById("snumber").value;

    var sub = parseFloat(fnumber) - parseFloat(snumber);

    var node2 = document.createElement("div");
    var node3 = document.createElement("h2");

    node3.innerHTML = sub;

    node2.appendChild(node3);

    node2.setAttribute("style", "background: white; width: 20%; padding: 15px; border: 1px gray; margin: 15px;");

    storage.insertAdjacentElement("beforeend", node2);

    document.getElementById("fnumber").value = "";
    document.getElementById("snumber").value = "";
}

function multiplication() {
    var fnumber = document.getElementById("fnumber").value;
    var snumber = document.getElementById("snumber").value;

    var mul = parseFloat(fnumber) * parseFloat(snumber);

    var node4 = document.createElement("div");
    var node5 = document.createElement("h2");

    node5.innerHTML = mul;

    node4.appendChild(node5);

    node4.setAttribute("style", "background: white; width: 20%; padding: 15px; border: 1px gray; margin: 15px;");

    storage.insertAdjacentElement("beforeend", node5);

    document.getElementById("fnumber").value = "";
    document.getElementById("snumber").value = "";
}

function division() {
    var fnumber = document.getElementById("fnumber").value;
    var snumber = document.getElementById("snumber").value;

    var div = parseFloat(fnumber) / parseFloat(snumber);

    var node6 = document.createElement("div");
    var node7 = document.createElement("h2");

    node7.innerHTML = div;

    node6.appendChild(node7);

    node6.setAttribute("style", "background: white; width: 20%; padding: 15px; border: 1px gray; margin: 15px;");

    storage.insertAdjacentElement("beforeend", node7);

    document.getElementById("fnumber").value = "";
    document.getElementById("snumber").value = "";
}

function exponent() {
    var fnumber = document.getElementById("fnumber").value;
    var snumber = document.getElementById("snumber").value;

    var exp = parseFloat(fnumber) ** parseFloat(snumber);

    var node8 = document.createElement("div");
    var node9 = document.createElement("h2");

    node9.innerHTML = exp;

    node8.appendChild(node9);

    node8.setAttribute("style", "background: white; width: 20%; padding: 15px; border: 1px gray; margin: 15px;");

    storage.insertAdjacentElement("beforeend", node9);

    document.getElementById("fnumber").value = "";
    document.getElementById("snumber").value = "";
}
