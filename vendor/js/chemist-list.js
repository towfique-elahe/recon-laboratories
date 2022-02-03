
// search filter fuction start
function myChemist() {
    var input, filter, ul, li, id, shop, owner, location, i, txtValue;
    input = document.getElementById("searchChemist");
    filter = input.value.toUpperCase();
    ul = document.getElementById("chemists");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        id = li[i].getElementsByClassName("id")[0];
        shop = li[i].getElementsByClassName("shop")[0];
        owner = li[i].getElementsByClassName("owner")[0];
        location = li[i].getElementsByClassName("location")[0];
        txtValue = id.textContent || id.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            txtValue = shop.textContent || shop.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                txtValue = owner.textContent || owner.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    li[i].style.display = "";
                } else {
                    txtValue = location.textContent || location.innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        li[i].style.display = "";
                    } else {
                        li[i].style.display = "none";
                    }
                }
            }
        }
    }
}
// search filter fuction ends here
