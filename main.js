let a=Math.floor(Math.random() * 30) + 1;
let b=Math.floor(Math.random() * 30) + 1;
document.write(a+" "+b);

function Sprawdz(a, b)
{
    if((a==20 || b==20) || (a=b<=20))
    {
        return true;
    }
}
Sprawdz(a, b);