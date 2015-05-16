function RollUntilDoubles(){
  var roll1, roll2, rollCounter;

  document.getElementById('outputDiv').innerHTML = "";
  $('rollCount').innerHTML = 0;

  do {
   
    roll1 = RandomInt(1, 6);               // ROLL AND DISPLAY DICE
    roll2 = RandomInt(1, 6);
     document.getElementById('outputDiv').innerHTML =
      document.getElementById('outputDiv').innerHTML + 
        roll1+'-'+roll2+'<br >';

    rollCounter = document.getElementById('rollCount').innerHTML;
    ++rollCounter;
    document.getElementById('rollCount').innerHTML = rollCounter;

    //update img elements to show the doubles
    //$ grabs source element always? ASK ABOUT THIS
    $('img1').src = "../images/die" + roll1 + ".gif";
    $('img2').src = "../images/die" + roll1 + ".gif";

      } while (roll1 != roll2);                // WHILE NOT DOUBLES,

    document.getElementById('outputDiv').innerHTML =
      document.getElementById('outputDiv').innerHTML + 'DOUBLES!';
   
 }

 //grab the button
 var button1 = document.getElementById('btn1');

 //register the onclick handler
 button1.onclick = RollUntilDoubles