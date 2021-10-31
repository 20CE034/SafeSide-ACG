var secpage=document.getElementById("box1")
var thirdpage=document.getElementById("box2")
var gujrank=document.getElementById("gujcetrank")
var branch=document.getElementsByName("field")
var selectedbranch=""
var tableRef = document.getElementById('displayresult').getElementsByTagName('tbody')[0];
var title_change=document.getElementById("changetitle")
var branch_dis=document.getElementById("branchchange")

thirdpage.style.display="none"
secpage.style.display="block"
function backtosecpage()
{
    console.log("back clicked");
    thirdpage.style.display="none";
    secpage.style.display="block";
    title_change.innerText="Merit Information";
}

function submitclicked()
{
    thirdpage.style.display="block";
    secpage.style.display="none";

    title_change.innerText="Result";
    rank=gujrank.value;
    console.log("ONG CLICKED");

    for(i = 0; i < branch.length; i++) {
        if(branch[i].checked)
            selectedbranch=branch[i].value;
    }

    if(selectedbranch=="IT")
    {
        selectedIT(rank)
        
    }

    else if(selectedbranch="Civil")
    {
        selectedCivil(rank)
    }

    else if(selectedbranch=="CS")
    {
        selectedCS(rank)
        
    }
}

function selectedIT(rank)
{
    console.log("me in IT")
    // console.log("IT "+ rank)
    
    // var college = ['msu','ld','itm'];
    // var closer21 = ['2000','1223', '2344'];
    // var closer20 = ['2000','1223', '2344'];
    // var reviews = ['4.4','4.1','4'];
    // var location = ['vadodara','ahm','vadodara'];
    // var info = ['vadodara','ahm','vadodara'];

    // for (let index = 0; index < college.length; index++){
    //     tableRef.insertRow().innerHTML = 
    //     "<th scope='row'>" + (index + 1).toString()+ "</th>" + 
    //     "<td>" +college[index]+ "</td>"+
    //     "<td>" +closer21[index]+ "</td>"+
    //     "<td>" +closer20[index]+ "</td>"+
    //     "<td>" +reviews[index]+ "</td>"+
    //     "<td>" +location[index]+ "</td>"+
    //     "<td>" +info[index]+ "</td>";
    // }
}

function selectedCivil(rank)
{
    console.log("Civil"+rank)

}

function selectedCS(rank)
{
    console.log("CS"+rank)

}


// document.getElementById('submit').onclick = func()
//  {
//     var radio = document.querySelector('input[type=radio][name=sap]:checked');
//     radio.checked = false;
// }

var ele = document.getElementsByName("Choose");
   for(var i=0;i<ele.length;i++)
      ele[i].checked = false;

function uncheckAll(f)
{
for (x=0;x<f.elements.length;x++)
    {
    if (f.elements[x].type == "radio")
    {
    f.elements[x].checked = false; 
    }
    }
}

function branch_display()
{
    console.log("branch selected");
    
}


var n = localStorage.getItem('on_load_counter');

if (n === null) {
    n = 0;
}

n++;

localStorage.setItem("on_load_counter", n);

document.getElementById('CounterVisitor').innerHTML = n;


function submitclickedjee()
{
    
    title_change.innerText="Result";
    rank=gujrank.value;
    console.log("ONG CLICKED");

  
    for(i = 0; i < branch.length; i++) {
        if(branch[i].checked)
            selectedbranch=branch[i].value;
    }
}
function submitclickedboard()
{
   
    title_change.innerText="Result";
    rank=gujrank.value;
    console.log("ONG CLICKED");

  
    for(i = 0; i < branch.length; i++) {
        if(branch[i].checked)
            selectedbranch=branch[i].value;
    }
}