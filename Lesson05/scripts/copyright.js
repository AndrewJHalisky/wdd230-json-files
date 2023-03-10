function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
}

const mainnav = document.querySelector('.primaryNav');
const hambutton = document.querySelector('#menu');

document.write("Last modified on" + " " +document.lastModified);
hambutton.addEventListener('click', () => {mainnav.classList.toggle('open')}, false);
 
const currentDate = new Date();

const fulldate = new Intl.DateTimeFormat("en-UK", {
    dateStyle: "full"
}).format(currentDate);

let weekDay = currentDate.getDay();
    if (weekDay !=0 && weekDay <= 3){
        document.querySelector(".no-events").style.display = "none";
    }
    else if (weekDay > 3 && weekDay == 0){
        document.querySelector(".no-events").style.display = "flex";
    }

document.querySelector('#date').textContent = fulldate;
document.querySelector('#year').textContent = currentDate.getFullYear();