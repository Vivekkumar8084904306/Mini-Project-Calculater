

function add()
{
   
    var a=Number(document.getElementById("second").value);
    var b=Number(document.getElementById("third").value);
    var d =document.getElementById("first");
    d.value=a+b;
    return false;

}
function subtract()
{
    var a=Number(document.getElementById("second").value);
    var b=Number(document.getElementById("third").value);
    var d=document.getElementById("first");
    d.value=a-b;
    return false;
}

function multi()
{
    var a=Number(document.getElementById("second").value);
    var b=Number(document.getElementById("third").value);
    var d=document.getElementById("first");
    d.value=a*b;
    return false;
}

function divide()
{
    var a=Number(document.getElementById("second").value);
    var b=Number(document.getElementById("third").value);
    var d=document.getElementById("first");
    d.value=a/b;
    return false;
}

function remi()
{
    var a=Number(document.getElementById("second").value);
    var b=Number(document.getElementById("third").value);
    var d=document.getElementById("first");
    d.value=a*b/100;
    return false;
}