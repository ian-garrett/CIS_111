function RollUntilDoubles(){
  var roll1, roll2, rollCounter;

  document.getElementById('outputDiv').innerHTML = "";
  $('rollCount').innerHTML = 0;

  do {
   
    roll1 = RandomInt(1, 6);               // ROLL AND DISPLAY DICE
    roll2 = RandomInt(1, 6);
     document.getElementById('outputDiv').innerHTML =
      document.getElementById('outputDiv').innerHTML + 
        '<img src=../images/die' + roll1 + '.gif>' + '-' + '<img src=../images/die' + roll2 + '.gif>' + '<br >';

    rollCounter = document.getElementById('rollCount').innerHTML;
    ++rollCounter;
    document.getElementById('rollCount').innerHTML = rollCounter;

      } while (roll1 != roll2);                // WHILE NOT DOUBLES,

    document.getElementById('outputDiv').innerHTML =
      document.getElementById('outputDiv').innerHTML + 'DOUBLES!';
   
 }

 //grab the button
 var button1 = document.getElementById('btn1');

 //register the onclick handler
 button1.onclick = RollUntilDoubles;