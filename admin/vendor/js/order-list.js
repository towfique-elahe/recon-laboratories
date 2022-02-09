
// search filter fuction start
function myOrder() {
    var input, filter, ul, li, id, mar, che, date, i, txtValue;
    input = document.getElementById("searchOrder");
    filter = input.value.toUpperCase();
    ul = document.getElementById("orders");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        id = li[i].getElementsByClassName("id")[0];
        mar = li[i].getElementsByClassName("mar")[0];
        che = li[i].getElementsByClassName("che")[0];
        date = li[i].getElementsByClassName("date")[0];
        txtValue = id.textContent || id.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            txtValue = mar.textContent || mar.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                txtValue = che.textContent || che.innerText;
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
