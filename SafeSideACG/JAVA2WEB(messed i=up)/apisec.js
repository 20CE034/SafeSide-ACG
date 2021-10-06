var run = document.getElementById("run");

run.addEventListener("click", function (e) {
  
  e.preventDefault();
  
  var stdin = document.getElementById("stdin");
  var form = document.getElementById("form");
  var credits = document.getElementById("credits");
  var output = document.getElementById("output");
  
  output.innerHTML = "Loading...";
  
  console.log(stdin.value);
  
  var obj = {};
  obj["clientId"] = "5432d7273018e7a31838ca0d0dfa4db";
  obj["clientSecret"] = "95e0e10b83ee23d1985f8c69a271cac82c635dab8815bf837e8f27de05272757";
  obj["script"] = "import java.util.Scanner;\r\npublic class Main {\r\n\r\n\tpublic static void main(String[] args) {\r\n\t\tint n;\r\n\t\tScanner sc = new Scanner(System.in);\r\n\r\n\t\tn = sc.nextInt();\r\n\t\tSystem.out.println(\"the branch you have selected is CS:\");\r\n\t\tif(n<=350){\r\n\t\t\tSystem.out.println(\"-->  nirma\");\r\n\t\t}\r\n\t\tif(n<=460){\r\n\t\t\tSystem.out.println(\"-->  msu baroda\");\r\n\t\t}\r\n\t\tif(n<=1764){\r\n\t\t\tSystem.out.println(\"-->  pdpu raisan\");\r\n\t\t}\r\n\t\tif(n<=576){\r\n\t\t\tSystem.out.println(\"-->  ldce ahmedabad\");\r\n\t\t}\r\n\t\tif(n<=305){\r\n\t\t\tSystem.out.println(\"-->  ddu(gia) nadiad\");\r\n\t\t}\r\n\t\tif(n<=615){\r\n\t\t\tSystem.out.println(\"-->  ddu(sfi) nadiad\");\r\n\t\t}\r\n\t\tif(n<=4082){\r\n\t\t\tSystem.out.println(\"-->  DPIATR,changa\");\r\n\t\t}\r\n\t\tif(n<=2280){\r\n\t\t\tSystem.out.println(\"-->  VV nagar\");\r\n\t\t}\r\n\t\tif(n<=1293){\r\n\t\t\tSystem.out.println(\"-->  vgec,ahmedabad\");\r\n\t\t}\r\n\t\tif(n<=3042){\r\n\t\t\tSystem.out.println(\"-->  cspit changa\");\r\n\t\t}\r\n\t\tif(n<=14472){\r\n\t\t\tSystem.out.println(\"-->  darshan university rajkot\");\r\n\t\t}\r\n\t\tif(n<=812){\r\n\t\t\tSystem.out.println(\"-->  BVM(GIA) vvnagar\");\r\n\t\t}\r\n\r\n\t\tif(n<=19476){\r\n\t\t\tSystem.out.println(\"-->  aditya birla ahmedabad\");\r\n\t\t}\r\n\t\tif(n<=4763){\r\n\t\t\tSystem.out.println(\"-->  GEC,bhavnagar\");\r\n\t\t}\r\n\t\tif(n<=5841){\r\n\t\t\tSystem.out.println(\"-->  GEC,rajkot\");\r\n\t\t}\r\n\t\tif(n<=10101){\r\n\t\t\tSystem.out.println(\"-->  GEC,patan\");\r\n\t\t}\r\n\t\tif(n<=12197){\r\n\t\t\tSystem.out.println(\"-->  Indus university,abad\");\r\n\t\t}\r\n\r\n\t\telse{\r\n\t\t\tSystem.out.println(\"wrong input\");\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}";
  obj["language"] = "java";
  obj["versionIndex"] = "0";
  obj["stdin"] = stdin.value;
  var jsonStr = JSON.stringify(obj);
  
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
    credits.innerHTML = "Runs left: " + creditsLeft;
  })
  .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
  
  
  
  
})