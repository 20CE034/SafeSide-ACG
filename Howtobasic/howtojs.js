var content=document.getElementById("box1")
var code=document.getElementById("box2")
var title_change=document.getElementById("changetitle")

code.style.display="none";
content.style.display="block";

function backtosecpage2()
{
    console.log("Back clicked (in Learn More)");
    code.style.display="none";
    content.style.display="block";
    title_change.innerText="Learn More";
}

function submitclicked()
{
    code.style.display="block";
    content.style.display="none";
    title_change.innerText="Learn More - Code";
}