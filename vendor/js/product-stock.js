
// search filter fuction start
function myStock() {
    var input, filter, stock, product, name, company, i, txtValue;
    input = document.getElementById("myStock");
    filter = input.value.toUpperCase();
    stock = document.getElementById("stock");
    product = stock.getElementsByTagName("a");
    for (i = 0; i < product.length; i++) {
        name = product[i].getElementsByClassName("name")[0];
        company = product[i].getElementsByClassName("company")[0];
        txtValue = name.textContent || name.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            product[i].style.display = "";
        } else {
            txtValue = company.textContent || company.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                product[i].style.display = "";
            } else {
                product[i].style.display = "none";
            }
        }
    }
}
// search filter fuction ends here
