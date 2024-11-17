function normalMode() {

    const button = document.querySelector(".top-right-button button");

    if (button.textContent === "Normal") {
        
        document.querySelector(".display-4").classList.add("display-4-hide");
        document.querySelector(".profile-photo").classList.add("profile-photo-normal");
        document.querySelector(".file-container").classList.add("file-container-normal");
        button.textContent = "Secret";

    } else {
       
        document.querySelector(".display-4").classList.remove("display-4-hide");
        document.querySelector(".profile-photo").classList.remove("profile-photo-normal");
        document.querySelector(".file-container").classList.remove("file-container-normal");
        button.textContent = "Normal";

    }
}