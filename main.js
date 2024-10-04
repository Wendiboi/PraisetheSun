document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                return;
            }
            entry.target.classList.remove('in-view');
        });
    });

    const allAnimatedElements = document.querySelectorAll('.animate');
    
    allAnimatedElements.forEach((element) => observer.observe(element));

});

// Display Software Engineering table
function showTableSE(){
    document.getElementById("Software_Engineering").style.visibility = "visible"
    document.getElementById("Fine_Art").style.visibility = "hidden"
    document.getElementById("Architecture").style.visibility = "hidden"
}

// Display Fine Art table
function showTableFA(){
    document.getElementById("Fine_Art").style.visibility = "visible"
    document.getElementById("Software_Engineering").style.visibility = "hidden"
    document.getElementById("Architecture").style.visibility = "hidden"
}

// Display Architecture table
function showTableA(){
    document.getElementById("Architecture").style.visibility = "visible"
    document.getElementById("Fine_Art").style.visibility = "hidden"
    document.getElementById("Software_Engineering").style.visibility = "hidden"
}

const optionMenu = document.querySelector(".select-menu"),
       selectBtn = optionMenu.querySelector(".select-btn"),
       options = optionMenu.querySelectorAll(".option"),
       sBtn_text = optionMenu.querySelector(".sBtn-text");

       selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

options.forEach(option => {
    option.addEventListener("click", () => {
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption

        optionMenu.classList.remove("active")
        console.log(selectedOption)
    })
})