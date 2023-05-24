var tablinks = document.getElementsByClassName("tab-links");
const tablinksCount = tablinks.length;
var tabcontents = document.getElementsByClassName("tab-contents");
const tabcontentsCount = tabcontents.length;
const sidemenu = document.getElementById("side-menu");

function opentab(tabname) {
    for (let i = 0; i < tablinksCount; i++) {
        tablinks[i].classList.remove("active-link");
    }
    event.currentTarget.classList.add("active-link");

    for (let i = 0; i < tabcontentsCount; i++) {
        tabcontents[i].classList.remove("active-tab");
    }
    document.getElementById(tabname).classList.add("active-tab");
}

function openmenu() {
    sidemenu.style.right = "0"
}

function closemenu() {
    sidemenu.style.right = "-200px"
}

/*function opentab(tabname) {
    for (let i = 0; i < tablinksCount; i++) {
        console.log(tablinks[i])
    }
    console.log(tablink.classList)

    for (let i = 0; i < tabcontentsCount; i++) {
        console.log(tabcontents[i])
    }
}
*/
/*var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
var sidemenu = document.getElementById("side-menu")

function opentab(tabname) {
    for(tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    event.currentTarget.classList.add("active-link");

    for(tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    document.getElementById(tabname).classList.add("active-tab");
}
}
*/