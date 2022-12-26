function numberFormat(n){
    return n > 9 ? "" + n: "0" + n;
}
let hr = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let messageOne = document.getElementById("messageOne");
let messageTwo = document.getElementById("notification");
let image = document.getElementById("big-img");
let am = document.getElementById("meridian");


function timerfn(){

    let date = new Date();
    let hrs = date.getHours();
    let mint = date.getMinutes();
    let secs = date.getSeconds();
    let ampm = hrs >=12 ? "PM" : "AM";
   
    
    if (hrs>=12 && hrs<=16 && ampm=="PM"){
        messageOne.innerText = "GOOD AFTERNOON !! TAKE SOME SLEEP";
        messageTwo.innerText = "LET'S HAVE SOME LUNCH !!";
        image.style.backgroundImage = "URL('Component30.png')";
      }
      else if (hrs>16 && hrs<=19 && ampm=="PM"){
        messageOne.innerText = "GOOD EVENING !!";
        messageTwo.innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!"
        image.style.backgroundImage = "URL('lunch_image@2x.png')";
      }

      else if (hrs>=20 && hrs<=23 && ampm=="AM"){
        messageOne.innerText = "GOOD NIGHT !!";
        messageTwo.innerText = "CLOSE YOUR EYES AND GO TO SLEEP";
        image.style.backgroundImage = "URL('Component31.png')";
      }

      if (hrs > 12) {
        hrs -= 12
    }
   
    hr.innerText = `${numberFormat(hrs)}`;
    min.innerText =`${numberFormat(mint)}`;
    sec.innerText = `${numberFormat(secs)}`;
    am.innerText = `${ampm}`;
    
    setTimeout(timerfn,1000);
};

timerfn();


let setAlarm = document.getElementById("alarmBtn");
setAlarm.addEventListener("click",function(){
  setAlarm.innerText="party time"
    setAlarm.style.border = "groove red";
    let dd1 = document.getElementById("dd1");
    let dd2 = document.getElementById("dd2");
    let dd3 = document.getElementById("dd3");
    let dd4 = document.getElementById("dd4");


    let wakeTime = document.getElementById("wakeTime");
    wakeTime.innerText = dd1.options[dd1.selectedIndex].innerHTML;
   
    let luchTime = document.getElementById("luchTime");
    luchTime.innerText = dd2.options[dd2.selectedIndex].innerHTML;

    let napTime = document.getElementById("napTime");
    napTime.innerText = dd3.options[dd3.selectedIndex].innerHTML;

    let nightTime = document.getElementById("nightTime");
    nightTime.innerText = dd4.options[dd4.selectedIndex].innerHTML;


});