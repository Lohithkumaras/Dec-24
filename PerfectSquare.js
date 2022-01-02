var num=parseInt(prompt("Enter the number to find wether it's perfect square or not"));

var count=0;

for(var i=0;i<=num&&count!=1;i++)
{
 
    if(i*i==num)
     count=1;
  
}
if(count==1)
alert(num +" is perfect square");
  else
  alert(num +" is not perfect square");
