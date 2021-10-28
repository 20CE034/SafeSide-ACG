var jee_change=document.getElementById("jeechange")
var jee_title=document.getElementById("titlejee")
function jeeo(){
  var input=document.getElementById('jee')
  var res=document.getElementById('outputjee')
  if(input.value<=10000){
    jee_title.innerText="Your JEE Rank is :";
    res.innerText=Number(input.value);
    jee_change.innerText="Congratulations! You are Eligible for Admission in ACPC Through JEE";
  }
   else{
    jee_title.innerText="Your JEE Rank is :";
    res.innerText=Number(input.value);
    jee_change.innerText="Nice Try! You are Not Eligible for Admission in ACPC Through JEE";
   }
  // res.innerText=Number(input.value) + Number(1) 
  // input.style.color
  console.log("clicked jee");console.log("Showing results for JEE");
  }

// var runj = document.getElementById("runj");

// runj.addEventListener("click", function (e) {
  
//   e.preventDefault();
  
//   var jee = document.getElementById("jee");
//   var form = document.getElementById("form");
//   var credits = document.getElementById("credits");
//   var output2 = document.getElementById("output2");
//   var branch_dis=document.getElementById("branchchange");
//   var selectedbranch="";

//   console.log("JEE Results Printed");
//   for(i = 0; i < branch.length; i++) {
//     if(branch[i].checked)
//         selectedbranch=branch[i].value;
// }

// //
// if(2>1)
// {
//   branch_dis.innerText="I.T.";
//   console.log("Selceted one of branch"+selectedbranch);
//   output2.innerHTML = "Loading...";
  
//   console.log(jee.value);
  
//   var obj8 = {};
//   obj8["clientId"] = "5432d7273018e7a31838ca0d0dfa4db";
//   obj8["clientSecret"] = "95e0e10b83ee23d1985f8c69a271cac82c635dab8815bf837e8f27de05272757";
//   obj8["script"] = "import java.util.*;\r\npublic class jern {\r\n\r\n    public static void main(String[] args) {\r\n        int n;\r\n        Scanner sc = new Scanner(System.in);\r\n        n = sc.nextInt();\r\n        // if (n < 10000) {\r\n        //     System.out.println(\"You are Eligible for Admission in ACPC\");\r\n        // } else {\r\n        //     System.out.println(\"You are not eligible for Admission in ACPC\");\r\n        // }\r\n        \r\n        System.out.println(\"You are Eligible for Admission in ACPC\");\r\n    }\r\n}";
//   obj8["language"] = "java";
//   obj8["versionIndex"] = "0";
//   obj8["jee"] = jee.value;
//   var jsonStr = JSON.stringify(obj8);
  
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
//     var outputStr = data.output2 ;
//     console.log(outputStr);
//     var formattedOutput = outputStr.replace(/(?:\r\n|\r|\n)/g, '<br>');
//     output2.innerHTML = formattedOutput;
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