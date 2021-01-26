
document.getElementById("matched").style.display="none";
document.getElementById("notMatched").style.display="none";
function setTriedTime(num) {
   if (num>=0) {
    document.getElementById("times").innerText=num;
   } else {
   document.getElementById("chanceLeft").innerText="No Chance Left!!";
   }
}
function getTriedTime() {
     var timesStr= document.getElementById("times").innerText;
     return Number(timesStr);
}

function setNotify(update) {
    if (update==1) {
        document.getElementById("matched").style.display="block";
    } else {
        document.getElementById("notMatched").style.display="block";
    }
    
}
function getRandomNumber() {
    randomNumber=Math.round((Math.random()*(9999 - 1000) + 1000));
    printPin(randomNumber);
}

function printPin(num) {
 document.getElementById("genaratedPin").value=num;
}
function getGeneratedPin() {
    return document.getElementById("genaratedPin").value;
}
function getOutput() {
 return  document.getElementById("output").value;
}
function printOutput(num) {
    document.getElementById("output").value=num;
}
 document.getElementById('submit-btn').addEventListener('click',function () {
     var output= getOutput();
     var getPin=getGeneratedPin();
     var times=getTriedTime();
     if (output==getPin) {
         setNotify(1);
     } else {
        setNotify(-1);
        times=times-1;
        setTriedTime(times);

     }
 })

document.getElementById("generrate-btn").addEventListener('click',function () {
    getRandomNumber();
    


})


 var number=document.getElementsByClassName('button');
    for (let index = 0; index < number.length; index++) {
       number[index].addEventListener('click',function () {
         if (this.id=='backspace') {
            var output=getOutput().toString();
            if(output){//if output has a value
				output= output.substr(0,output.length-1);
				printOutput(output);
			}
            
         } 
      else  if (this.id== 'clear') {
            
				printOutput("");
			} 
         
         else {
            var output=getOutput();
            input=output+this.id;
            printOutput(input);
         }
        })
        
    }


