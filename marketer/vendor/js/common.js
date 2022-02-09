// toggle feature start
function closeNav() {
    document.getElementById("sidebar").style.width = "50px";
    document.getElementById("close").style.display = "none";
    document.getElementById("open").style.display = "initial";
    document.getElementById("sub1").style.visibility = "hidden";
    document.getElementById("sub2").style.visibility = "hidden";
}

function openNav() {
    document.getElementById("sidebar").style.width = "220px";
    document.getElementById("open").style.display = "none";
    document.getElementById("close").style.display = "initial";
    document.getElementById("sub1").style.visibility = "initial";
    document.getElementById("sub2").style.visibility = "initial";
}
// toggle feature ends here
