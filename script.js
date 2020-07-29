
/* Having a number, determine whether it is even or odd. Use JS ‘function with
return’ to implement the logic. Pass values 67 and 76 to the function and
print the result. */
  




//odd or even using conditional operator
function oddoreven()
 {
   var num=document.getElementById("even").value;
 (num%2==0)?document.getElementById("test1").innerHTML= num +  "is even number":document.getElementById("test1").innerHTML= num +  "is Odd number"; 
}
oddoreven()
//odd or even using if else
function ifoddoreven()
 {
    var x=document.getElementById("odd").value;
    if (x%2==0)
    {
      
     document.getElementById("test").innerHTML= x +  "is Even number"
    }
  else
  {
    document.getElementById("test").innerHTML= x +  "is Odd number"
  }
}

/* . Having number variables ‘M’ and ‘N’, swap their values without using a third
variable. Use JS parameterized functions to write the code. Pass four different
values (10, 90), (20,80), (30, 70), (40,60) to the function and print the result.*/
 



function swap()
{

  var M=document.getElementById("Min").value;
 var  N=document.getElementById("Nin").value;
M=M/N;
N=M*N;
M=N/M;
document.getElementById("out").innerHTML= ( M + "</br>" + "M After swap" +"</br>" + N + "</br>" + "N After swap") ;
}
swap()










