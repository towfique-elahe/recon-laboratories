
// search filter fuction start
function mySearch() {
    var input, filter, ul, li, id, name, company, date, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("products");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        id = li[i].getElementsByClassName("id")[0];
        name = li[i].getElementsByClassName("name")[0];
        company = li[i].getElementsByClassName("company")[0];
        date = li[i].getElementsByClassName("date")[0];
        txtValue = id.textContent || id.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            txtValue = name.textContent || name.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                txtValue = company.textContent || company.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    li[i].style.display = "";
                } else {
                    txtValue = date.textContent || date.innerText;
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
