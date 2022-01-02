
var num=parseInt(prompt("Enter the Number"));

for(var i=0;i<=num;i++)
{
    if(CheckPrime(i))
    {
        console.log(i);
    }
}

function CheckPrime(n)
{

if(n==0||n==1)
return false;
else if(n==2)
return true;
else{
    for(var k=2;k<n;k++)
    {
        if(n%k!=0)
        return true;
    }
}
}
