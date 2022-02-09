var button = document.getElementById('edit-profile');

button.onclick = function () {
    var editimg = document.getElementById('edit');
    if (editimg.style.display !== 'inherit') {
        edit.style.display = 'inherit';
    }
    else {
        edit.style.display = '';
    }
};

var modal = document.getElementsByClassName("modal")[0];

//getting all modal opening buttons
var ModelBtns = document.querySelectorAll(".ModalBtn");

ModelBtns.forEach((Btn) => {
    Btn.onclick = () => {
        var modal = Btn.getAttribute("data-modal");
        document.getElementById(modal).style.display = "block";
    };
});

//getting all modal opening buttons
var ModelCloseBtns = document.querySelectorAll(".close");

ModelCloseBtns.forEach((CloseBtn) => {
    CloseBtn.onclick = () => {
        var modal = CloseBtn.closest(".modal").style.display = "none";
    };
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}