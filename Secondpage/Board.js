var board_change=document.getElementById("boardchange")
var board_title=document.getElementById("titleboard")
function boardo(){
  var input1=document.getElementById('board')
  var resu=document.getElementById('outputboard')
  if(input1.value>=140){
    board_title.innerText="Your Board Marks is/are :";
    resu.innerText=Number(input1.value);
    board_change.innerText="Congratulations! You are Eligible for Admission in ACPC";
  }
   else{
    board_title.innerText="Your Board Marks is/are :";
    resu.innerText=Number(input1.value);
    board_change.innerText="Nice Try! You are Not Eligible for Admission in ACPC";
   }
  // res.innerText=Number(input.value) + Number(1) 
  // input.style.color
  console.log("clicked board");console.log("Showing results for JEE");
  }


// var run3 = document.getElementById("run3");

// run3.addEventListener("click", function (e) {
  
//   e.preventDefault();
  
//   var stdin = document.getElementById("board");
//   var form = document.getElementById("form");
//   var credits = document.getElementById("credits");
//   var output = document.getElementById("output3");
//   var branch_dis=document.getElementById("branchchange");
//   var selectedbranch="";

//   console.log("Board Results Printed");
//   for(i = 0; i < branch.length; i++) {
//     if(branch[i].checked)
//         selectedbranch=branch[i].value;
// }

// //
// if(selectedbranch=="IT"||selectedbranch=="CS"||selectedbranch=="EE"||selectedbranch==" Chemical"||selectedbranch=="ME"||selectedbranch=="Civil"||selectedbranch=="ECE")
// {
//   branch_dis.innerText="I.T.";
//   console.log("Selceted one of branch"+selectedbranch);
//   output.innerHTML = "Loading...";
  
//   console.log(stdin.value);
  
//   var obj1 = {};
//   obj1["clientId"] = "5432d7273018e7a31838ca0d0dfa4db";
//   obj1["clientSecret"] = "95e0e10b83ee23d1985f8c69a271cac82c635dab8815bf837e8f27de05272757";
//   obj1["script"] = "\r\nimport java.util.*;\r\npublic class jern {\r\n\r\n    public static void main(String[] args) {\r\n      \r\n           Scanner input = new Scanner(System.in);\r\n       \r\n           int rank = input.nextInt();\r\n         if(rank<10000){\r\n           System.out.println(\"You are Eligible for Admission in ACPC\");\r\n         }\r\n         else{\r\n           System.out.println(\"You are not eligible for Admission in ACPC\");\r\n         }\r\n        \r\n       }\r\n    }\r\n        \r\n    \r\n\r\n \r\n";
//   obj1["language"] = "java";
//   obj1["versionIndex"] = "0";
//   obj1["stdin"] = stdin.value;
//   var jsonStr = JSON.stringify(obj1);
  
//   console.log(jsonStr);
  
//   const proxyurl = "https://cors-anywhere.herokuapp.com/";
//   const url = "https://api.jdoodle.com/v1/execute";
//   fetch(proxyurl + url, {
//     method: 'post',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: jsonStr
//   })
//   .then(response => {
//     return response.json()
//   })
//   .then(data => {
//     console.log(data);
//     var outputStr = data.output;
//     console.log(outputStr);
//     var formattedOutput = outputStr.replace(/(?:\r\n|\r|\n)/g, '<br>');
//     output.innerHTML = formattedOutput;
//   })
//   .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
  
//   const creditsUrl = "https://api.jdoodle.com/v1/credit-spent";
//   fetch(proxyurl + creditsUrl, {
//     method: 'post',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: jsonStr
//   })
//   .then(response => {
//     return response.json()
//   })
//   .then(data => {
//     console.log(data);
//     var creditsLeft = 200 - data.used;
//     console.log(credits);
//     console.log("Credits left = "+creditsLeft);
//   })
//   .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
// }

// else{

// }

// });