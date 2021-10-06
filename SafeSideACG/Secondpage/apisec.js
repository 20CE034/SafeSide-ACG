var run = document.getElementById("run");

run.addEventListener("click", function (e) {
  
  e.preventDefault();
  
  var stdin = document.getElementById("stdin");
  var form = document.getElementById("form");
  var credits = document.getElementById("credits");
  var output = document.getElementById("output");
  var branch_dis=document.getElementById("branchchange");
  var selectedbranch="";
  
  for(i = 0; i < branch.length; i++) {
    if(branch[i].checked)
        selectedbranch=branch[i].value;
}


//IT
if(selectedbranch=="IT")
{
  branch_dis.innerText="I.T.";
  
  output.innerHTML = "Loading...";
  
  console.log(stdin.value);
  
  var obj1 = {};
  obj1["clientId"] = "5432d7273018e7a31838ca0d0dfa4db";
  obj1["clientSecret"] = "95e0e10b83ee23d1985f8c69a271cac82c635dab8815bf837e8f27de05272757";
  obj1["script"] = "import java.util.Scanner;\r\npublic class Main {\r\n\r\n    public static void main(String[] args) {\r\n        int n;\r\n\r\n        Scanner sc = new Scanner(System.in);\r\n        n = sc.nextInt();\r\n//CIVIL\r\n        if(n<=8751){\r\n            System.out.println(\"NIRMA\");\r\n        }\r\n        if(n<=3609){\r\n            System.out.println(\" msu baroda\");\r\n        }\r\n        if(n<=4534){\r\n            System.out.println(\"-->  ldce ahmedabad\");\r\n        }\r\n        if(n<=10707){\r\n            System.out.println(\"-->  ddu(gia) nadiad\");\r\n        }\r\n        if(n<=7912){\r\n            System.out.println(\"-->  vgec,ahmedabad\");\r\n        }\r\n        if(n<=11063){\r\n            System.out.println(\"-->  BVM(GIA) vvnagar\");\r\n        }\r\n        if(n<=20455){\r\n            System.out.println(\"-->  GEC,bharuch\");\r\n        }\r\n        if(n<=14447){\r\n            System.out.println(\"-->  GEC,bhavnagar\");\r\n        }\r\n        if(n<=16098){\r\n            System.out.println(\"-->  GEC,rajkot\");\r\n        }\r\n        if(n<=11776){\r\n            System.out.println(\"-->  GEC,surat\");\r\n        }\r\n        if(n<=21586){\r\n            System.out.println(\"-->  GEC,valsad\");\r\n        }\r\n        if(n<=25600){\r\n            System.out.println(\"-->  GEC,patan\");\r\n        }\r\n        else{\r\n            System.out.println(\"Enter Valid Rank\");\r\n        }\r\n     \r\n    }\r\n\r\n}";
  obj1["language"] = "java";
  obj1["versionIndex"] = "0";
  obj1["stdin"] = stdin.value;
  var jsonStr = JSON.stringify(obj1);
  
  console.log(jsonStr);
  
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = "https://api.jdoodle.com/v1/execute";
  fetch(proxyurl + url, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: jsonStr
  })
  .then(response => {
    return response.json()
  })
  .then(data => {
    console.log(data);
    var outputStr = data.output;
    console.log(outputStr);
    var formattedOutput = outputStr.replace(/(?:\r\n|\r|\n)/g, '<br>');
    output.innerHTML = formattedOutput;
  })
  .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
  
  const creditsUrl = "https://api.jdoodle.com/v1/credit-spent";
  fetch(proxyurl + creditsUrl, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: jsonStr
  })
  .then(response => {
    return response.json()
  })
  .then(data => {
    console.log(data);
    var creditsLeft = 200 - data.used;
    console.log(credits);
    // credits.innerHTML = "Runs left: " + creditsLeft;
  })
  .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
  console.log("IT")
}




//CE
else if(selectedbranch="C.E.")
{
  branch_dis.innerText="C.E.";
  
  output.innerHTML = "Loading...";
  
  console.log(stdin.value);
  
  var obj2 = {};
  obj2["clientId"] = "5432d7273018e7a31838ca0d0dfa4db";
  obj2["clientSecret"] = "95e0e10b83ee23d1985f8c69a271cac82c635dab8815bf837e8f27de05272757";
  obj2["script"] = "import java.util.Scanner;\r\npublic class Main {\r\n\r\n    public static void main(String[] args) {\r\n        int n;\r\n\r\n        Scanner sc = new Scanner(System.in);\r\n        n = sc.nextInt();\r\n//CIVIL\r\n        if(n<=8751){\r\n            System.out.println(\"NIRMA\");\r\n        }\r\n        if(n<=3609){\r\n            System.out.println(\" msu baroda\");\r\n        }\r\n        if(n<=4534){\r\n            System.out.println(\"-->  ldce ahmedabad\");\r\n        }\r\n        if(n<=10707){\r\n            System.out.println(\"-->  ddu(gia) nadiad\");\r\n        }\r\n        if(n<=7912){\r\n            System.out.println(\"-->  vgec,ahmedabad\");\r\n        }\r\n        if(n<=11063){\r\n            System.out.println(\"-->  BVM(GIA) vvnagar\");\r\n        }\r\n        if(n<=20455){\r\n            System.out.println(\"-->  GEC,bharuch\");\r\n        }\r\n        if(n<=14447){\r\n            System.out.println(\"-->  GEC,bhavnagar\");\r\n        }\r\n        if(n<=16098){\r\n            System.out.println(\"-->  GEC,rajkot\");\r\n        }\r\n        if(n<=11776){\r\n            System.out.println(\"-->  GEC,surat\");\r\n        }\r\n        if(n<=21586){\r\n            System.out.println(\"-->  GEC,valsad\");\r\n        }\r\n        if(n<=25600){\r\n            System.out.println(\"-->  GEC,patan\");\r\n        }\r\n        else{\r\n            System.out.println(\"Enter Valid Rank\");\r\n        }\r\n     \r\n    }\r\n\r\n}";
  obj2["language"] = "java";
  obj2["versionIndex"] = "0";
  obj2["stdin"] = stdin.value;
  var jsonStr = JSON.stringify(obj2);
  
  console.log(jsonStr);
  
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = "https://api.jdoodle.com/v1/execute";
  fetch(proxyurl + url, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: jsonStr
  })
  .then(response => {
    return response.json()
  })
  .then(data => {
    console.log(data);
    var outputStr = data.output;
    console.log(outputStr);
    var formattedOutput = outputStr.replace(/(?:\r\n|\r|\n)/g, '<br>');
    output.innerHTML = formattedOutput;
  })
  .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
  
  const creditsUrl = "https://api.jdoodle.com/v1/credit-spent";
  fetch(proxyurl + creditsUrl, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: jsonStr
  })
  .then(response => {
    return response.json()
  })
  .then(data => {
    console.log(data);
    var creditsLeft = 200 - data.used;
    console.log(credits);
    // credits.innerHTML = "Runs left: " + creditsLeft;
  })
  .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
   console.log("CE")
}




//CS
else if(selectedbranch=="CS")
{
  branch_dis.innerText="C.S.";
  
  output.innerHTML = "Loading...";
  
  console.log(stdin.value);
  
  var obj3 = {};
  obj3["clientId"] = "5432d7273018e7a31838ca0d0dfa4db";
  obj3["clientSecret"] = "95e0e10b83ee23d1985f8c69a271cac82c635dab8815bf837e8f27de05272757";
  obj3["script"] = "import java.util.Scanner;\r\npublic class Main {\r\n\r\n\tpublic static void main(String[] args) {\r\n\t\tint n;\r\n\t\tScanner sc = new Scanner(System.in);\r\n//CS\r\n\t\tn = sc.nextInt();\r\n\t\tif(n<=350){\r\n\t\t\tSystem.out.println(\"-->  nirma\");\r\n\t\t}\r\n\t\tif(n<=460){\r\n\t\t\tSystem.out.println(\"-->  msu baroda\");\r\n\t\t}\r\n\t\tif(n<=1764){\r\n\t\t\tSystem.out.println(\"-->  pdpu raisan\");\r\n\t\t}\r\n\t\tif(n<=576){\r\n\t\t\tSystem.out.println(\"-->  ldce ahmedabad\");\r\n\t\t}\r\n\t\tif(n<=305){\r\n\t\t\tSystem.out.println(\"-->  ddu(gia) nadiad\");\r\n\t\t}\r\n\t\tif(n<=615){\r\n\t\t\tSystem.out.println(\"-->  ddu(sfi) nadiad\");\r\n\t\t}\r\n\t\tif(n<=4082){\r\n\t\t\tSystem.out.println(\"-->  DPIATR,changa\");\r\n\t\t}\r\n\t\tif(n<=2280){\r\n\t\t\tSystem.out.println(\"-->  VV nagar\");\r\n\t\t}\r\n\t\tif(n<=1293){\r\n\t\t\tSystem.out.println(\"-->  vgec,ahmedabad\");\r\n\t\t}\r\n\t\tif(n<=3042){\r\n\t\t\tSystem.out.println(\"-->  cspit changa\");\r\n\t\t}\r\n\t\tif(n<=14472){\r\n\t\t\tSystem.out.println(\"-->  darshan university rajkot\");\r\n\t\t}\r\n\t\tif(n<=812){\r\n\t\t\tSystem.out.println(\"-->  BVM(GIA) vvnagar\");\r\n\t\t}\r\n\r\n\t\tif(n<=19476){\r\n\t\t\tSystem.out.println(\"-->  aditya birla ahmedabad\");\r\n\t\t}\r\n\t\tif(n<=4763){\r\n\t\t\tSystem.out.println(\"-->  GEC,bhavnagar\");\r\n\t\t}\r\n\t\tif(n<=5841){\r\n\t\t\tSystem.out.println(\"-->  GEC,rajkot\");\r\n\t\t}\r\n\t\tif(n<=10101){\r\n\t\t\tSystem.out.println(\"-->  GEC,patan\");\r\n\t\t}\r\n\t\tif(n<=12197){\r\n\t\t\tSystem.out.println(\"-->  Indus university,abad\");\r\n\t\t}\r\n\r\n\t\telse{\r\n\t\t\tSystem.out.println(\"Enter Valid Rank\");\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}";
  obj3["language"] = "java";
  obj3["versionIndex"] = "0";
  obj3["stdin"] = stdin.value;
  var jsonStr = JSON.stringify(obj3);
  
  console.log(jsonStr);
  
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = "https://api.jdoodle.com/v1/execute";
  fetch(proxyurl + url, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: jsonStr
  })
  .then(response => {
    return response.json()
  })
  .then(data => {
    console.log(data);
    var outputStr = data.output;
    console.log(outputStr);
    var formattedOutput = outputStr.replace(/(?:\r\n|\r|\n)/g, '<br>');
    output.innerHTML = formattedOutput;
  })
  .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
  
  const creditsUrl = "https://api.jdoodle.com/v1/credit-spent";
  fetch(proxyurl + creditsUrl, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: jsonStr
  })
  .then(response => {
    return response.json()
  })
  .then(data => {
    console.log(data);
    var creditsLeft = 200 - data.used;
    console.log(credits);
    // credits.innerHTML = "Runs left: " + creditsLeft;
  })
  .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
  console.log("CS")
}

  // output.innerHTML = "Loading...";
  
  // console.log(stdin.value);
  
  // var obj = {};
  // obj["clientId"] = "5432d7273018e7a31838ca0d0dfa4db";
  // obj["clientSecret"] = "95e0e10b83ee23d1985f8c69a271cac82c635dab8815bf837e8f27de05272757";
  
  // obj["language"] = "java";
  // obj["versionIndex"] = "0";
  // obj["stdin"] = stdin.value;
  // var jsonStr = JSON.stringify(obj);
  
  // console.log(jsonStr);
  
  // const proxyurl = "https://cors-anywhere.herokuapp.com/";
  // const url = "https://api.jdoodle.com/v1/execute";
  // fetch(proxyurl + url, {
  //   method: 'post',
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json'
  //   },
  //   body: jsonStr
  // })
  // .then(response => {
  //   return response.json()
  // })
  // .then(data => {
  //   console.log(data);
  //   var outputStr = data.output;
  //   console.log(outputStr);
  //   var formattedOutput = outputStr.replace(/(?:\r\n|\r|\n)/g, '<br>');
  //   output.innerHTML = formattedOutput;
  // })
  // .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
  
  // const creditsUrl = "https://api.jdoodle.com/v1/credit-spent";
  // fetch(proxyurl + creditsUrl, {
  //   method: 'post',
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json'
  //   },
  //   body: jsonStr
  // })
  // .then(response => {
  //   return response.json()
  // })
  // .then(data => {
  //   console.log(data);
  //   var creditsLeft = 200 - data.used;
  //   console.log(credits);
  //   // credits.innerHTML = "Runs left: " + creditsLeft;
  // })
  // .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
  
  
  
  
});