let count = 0;


const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("3")) {
      count--;

    } else if (styles.contains("1")) {
        count++;
    } else {
        count = 0;
    }
   
        value.textContent = count;
    });
});
