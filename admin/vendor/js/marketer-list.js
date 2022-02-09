
// search filter fuction start
function myMarketer() {
    var input, filter, ul, li, id, name, i, txtValue;
    input = document.getElementById("searchMarketer");
    filter = input.value.toUpperCase();
    ul = document.getElementById("marketers");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        id = li[i].getElementsByClassName("id")[0];
        name = li[i].getElementsByClassName("name")[0];
        txtValue = id.textContent || id.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            txtValue = name.textContent || name.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }
}
// search filter fuction ends here
