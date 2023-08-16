const revealBtn = document.getElementById("confirmation-popup");
const addBtn = document.getElementsByClassName("add-btn");
const hiddenContent = document.querySelector(".hidden-content");


function revealContent() {
    if (hiddenContent.classList.contains("add-btn") && hiddenContent.classList.contains("fade")) {
        hiddenContent.classList.remove("add-btn");
        hiddenContent.classList.remove("fade");
    }
    else {
        hiddenContent.classList.add("add-btn");
        hiddenContent.classList.add("fade");
        setTimeout(function(){
            hiddenContent.classList.remove("fade");
        },
        3000);
        console.log(hiddenContent);
    }
}

addBtn[0].addEventListener("click", revealContent);
