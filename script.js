function numberFormat(n){
    return n > 9 ? "" + n: "0" + n;
}
let hr = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let messageOne = document.getElementById("messageOne");
let messageTwo = document.getElementById("messageTwo");
let image = document.getElementById("large-img");
let am = document.getElementById("meridian");


function timerfn(){

    let date = new Date();
    let hrs = date.getHours();
    let mint = date.getMinutes();
    let secs = date.getSeconds();
    let ampm = hrs >=12 ? "PM" : "AM";
    
    if(hrs>=6 && hrs<=11 && ampm=="AM"){
      messageOne.innerText= "GOOD MORNING!! WAKE UP !!";
    }
    
    else if (hrs>=12 && hrs<=15 && ampm=="PM"){
      messageOne.innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP";
      
    }
    else if (hrs>=16 && hrs<=19 && ampm=="PM"){
      messageOne.innerText = "GOOD EVENING !!";
    }
    
    else if (hrs>=20 && hrs<=23 && ampm=="PM"){
      messageOne.innerText="GOOD NIGHT";
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
      
      
      let d1 = document.getElementById("d1");
      let d2 = document.getElementById("d2");
      let d3 = document.getElementById("d3");
      let d4 = document.getElementById("d4");
      document.getElementById("wakeTime").innerText = d1.options[d1.selectedIndex].innerText;
      document.getElementById("luchTime").innerText = d2.options[d2.selectedIndex].innerText;
    document.getElementById("napTime").innerText = d3.options[d3.selectedIndex].innerText;
    document.getElementById("nightTime").innerText = d4.options[d4.selectedIndex].innerText;
    
    let date = new Date();
    let hourhand = date.getHours(); 
    let wakeupTimeAlarm=d1.value;
    let lunchTimeAlarm=d2.value;
    let napTimeAlarm =d3.value;
    let nightTimeAlarm=d4.value;
    
    
    if(wakeupTimeAlarm==hourhand-1){
      messageTwo.innerHTML = "GRAB SOME HEALTHY BREAKFAST!!!";
      image.style.backgroundImage = "URL('Component30.png')";    
    }
    else if(lunchTimeAlarm==hourhand-1){
      messageTwo.innerText = "LET'S HAVE SOME LUNCH !!";
      image.style.backgroundImage = "URL('Component31.png')";
    }
    else if(napTimeAlarm==hourhand-1){
      messageTwo.innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
      image.style.backgroundImage = "URL('lunch_image.png')";    
    }
    else if(nightTimeAlarm==hourhand-1){
      messageTwo.innerText = "CLOSE YOUR EYES AND GO TO SLEEP";
      image.style.backgroundImage = "URL('Component32.png')";     
  }
    else{
      messageTwo.innerText="Select time and click on set alarm ";
      image.style.backgroundImage = "url('random.webp')";
      image.style.backgroundSize = "contain";
  }

});

setAlarm.addEventListener("mouseover",function(){
  this.innerText="Party Time!!"

});

setAlarm.addEventListener("mouseout",function(){
  this.innerText="Set Alarm"
});



  
