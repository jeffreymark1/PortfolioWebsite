console.log("JavaScript is linked to HTML!");

const ppb = document.querySelectorAll(".black");
console.log(ppb);

for(let i = 0; i <= ppb.length - 1; i++){
    ppb.addEventListener ("click", () => {
        window.open("https://odysseynoir.netlify.app/", "_blank");
    })
}

/*ppb.addEventListener ('click', (e) => {
    window.open("https://odysseynoir.netlify.app/", "_blank");
})*/