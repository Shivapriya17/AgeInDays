function sanju(){ 
   var birthyear = prompt("When is your birthday");
   var calculate = myFunction() ;
   function myFunction(){
      return (2021-birthyear)*(365);
   }

   var h1= document.createElement("h1");
   var text = document.createTextNode("Your age is " + calculate + "days")
   h1.setAttribute('id' , 'y');
   h1.appendChild(text);

   document.getElementById('dummy').appendChild(h1);
}

function reset(){
   document.getElementById('y').remove();
}