function sendMessage(){
    var mail = document.getElementById("mailID").innerHTML;
    alert(""+ mail);
    
        Email.send({ 
            Host: "smtp.gmail.com", 
            Username: "tanujwebsite@gmail.com", 
            Password: "tanujr19112001", 
            To: "medicustanuj@gmail.com", 
            From: "tanujwebsite@gmail.com", 
            Subject: "Sending Email using javascript", 
            Body: "Well that was easy!!", 
          }) 
            .then(function (message) { 
              alert("Your Message was successfully sent to Tanuj Rajkumar. He'll respond at the earliest !") 
            }); 
        
   
    
}


function subscribe(){
    var mail = document.getElementById("subscriberMAIL").innerHTML;
    alert(""+ mail);
    
        Email.send({ 
            Host: "smtp.gmail.com", 
            Username: "tanujwebsite@gmail.com", 
            Password: "tanujr19112001", 
            To: "medicustanuj@gmail.com", 
            From: "tanujwebsite@gmail.com", 
            Subject: "SUBSCRIPTION REQUEST - ", 
            Body: "Well that was easy!!", 
          }) 
            .then(function (message) { 
              alert("Subscription Successful! Happy to have you onboard!") 
            }); 
        
   
    
}




function mouseover(){
  alert("Hi");
document.getElementById("exper").style("box-shadow: 0px 5px grey");


}