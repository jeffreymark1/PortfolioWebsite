console.log("JavaScript is linked to HTML!");

const ppb = document.querySelector(".black");
console.log(ppb);

ppb.addEventListener ('click', (e) => {
    window.open("https://odysseynoir.netlify.app/", "_blank");
})