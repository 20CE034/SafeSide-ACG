
          var run = document.getElementById("run");

          run.addEventListener("click", function (e) {
            
            e.preventDefault();
            
            var stdin = document.getElementById("stdin");
            var form = document.getElementById("form");
            var credits = document.getElementById("credits");
            var output = document.getElementById("output");
            var branch_dis=document.getElementById("branchchange");
            var selectedbranch="";

            console.log("GUJCET Results Printed");
            for(i = 0; i < branch.length; i++) {
              if(branch[i].checked)
                  selectedbranch=branch[i].value;
          }

          //IT
          if(selectedbranch=="IT")
          {
            branch_dis.innerText="I.T.";
            console.log("I.T.");
            output.innerHTML = "Loading...";
            
            console.log(stdin.value);
            
            var obj1 = {};
            obj1["clientId"] = "5432d7273018e7a31838ca0d0dfa4db";
            obj1["clientSecret"] = "95e0e10b83ee23d1985f8c69a271cac82c635dab8815bf837e8f27de05272757";
            obj1["script"] = "\r\nimport java.util.Scanner;\r\n\r\npublic class Main {\r\n    public static void main(String[] args) {\r\n        int n;\r\n\t\tScanner sc = new Scanner(System.in);\r\n\t\t// System.out.println(\"enter your rank\");\r\n\t\tn = sc.nextInt();\r\n\t\t// System.out.println(\"the branch you have selected is information and technology :\");\r\n\t\tif(n<=54){\r\n\t\t\tSystem.out.println(\"DAAICT\");\r\n\t\t}\r\n\t\tif(n<=2584){\r\n\t\t\tSystem.out.println(\" PDPU RAISAN\");\r\n\t\t}\r\n\t\tif(n<=1025){\r\n\t\t\tSystem.out.println(\" LDCE AHMEDABAD\");\r\n\t\t}\r\n\t\tif(n<=1399){\r\n\t\t\tSystem.out.println(\" DDU(SFI) NADIAD\");\r\n\t\t}\r\n\t\tif(n<=4629){\r\n\t\t\tSystem.out.println(\" DPIATR CHANGA\");\r\n\t\t}\r\n\t\tif(n<=3212){\r\n\t\t\tSystem.out.println(\" GCET VVNAGAR\");\r\n\t\t}\r\n\t\tif(n<=1457){\r\n\t\t\tSystem.out.println(\" VGEC ABAD\");\r\n\t\t}\r\n\t\tif(n<=3837){\r\n\t\t\tSystem.out.println(\" CSPIT CHANGA\");\r\n\t\t}\r\n\t\tif(n<=2041){\r\n\t\t\tSystem.out.println(\" BVM (SFI) VVNAGAR\");\r\n\t\t}\r\n\t\tif(n<=5213){\r\n\t\t\tSystem.out.println(\" ADANI AHMEDABAD\");\r\n\t\t}\r\n\t\tif(n<=6673){\r\n\t\t\tSystem.out.println(\" GEC BHAVNAGAR\");\r\n\t\t}\r\n\t\tif(n<=13023){\r\n\t\t\tSystem.out.println(\" INDUS UNIVERSITY ABAD\");\r\n                }\r\n                if(n<=70000){\r\n                    System.out.println(\" Alpha kalol\");\r\n                System.out.println(\"Aditya Birla University\");\r\n\t\tSystem.out.println(\" APPOLO Abad\");\r\n\t\tSystem.out.println(\" Atmiya Rajkot\");\r\n\t\tSystem.out.println(\" Ganpat University\");\r\n\t\tSystem.out.println(\" Gyanmanjri Bhavnagar\");\r\n                }\r\n\t\telse{\r\n\t\t\tSystem.out.println(\"Can not fetch output , Enter valid input.\");\r\n\t\t}\r\n\t\t\r\n    }\r\n    \r\n}\r\n";
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
              console.log("Credits left = "+creditsLeft);
            })
            .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
          }



          //CIVIL
          else if(selectedbranch=="Civil")
          {
            branch_dis.innerText="Civil";
            console.log("Civil");
            
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
              console.log("Credits left = "+creditsLeft);
              // credits.innerHTML = "Runs left: " + creditsLeft;
            })
            .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))

          }
          //CS
          else if(selectedbranch=="CS")
          {
            branch_dis.innerText="C.S.";
            console.log("C.S.");
            output.innerHTML = "Loading...";
            
            console.log(stdin.value);
            
            var obj3 = {};
            obj3["clientId"] = "5432d7273018e7a31838ca0d0dfa4db";
            obj3["clientSecret"] = "95e0e10b83ee23d1985f8c69a271cac82c635dab8815bf837e8f27de05272757";
            obj3["script"] = "import java.util.Scanner;\r\npublic class Main {\r\n\r\n\tpublic static void main(String[] args) {\r\n\t\tint n;\r\n\t\tScanner sc = new Scanner(System.in);\r\n\t\tn = sc.nextInt();\r\n\t\t// System.out.println(\"the branch you have selected is computer science :\");\r\n\t\tif(n<=350){\r\n\t\t\tSystem.out.println(\" nirma\");\r\n\t\t}\r\n\t\tif(n<=460){\r\n\t\t\tSystem.out.println(\" MSU Baroda\");\r\n\t\t}\r\n\t\tif(n<=1764){\r\n\t\t\tSystem.out.println(\" PDPU Raisan\");\r\n\t\t}\r\n\t\tif(n<=576){\r\n\t\t\tSystem.out.println(\" LDCE ahmedabad\");\r\n\t\t}\r\n\t\tif(n<=305){\r\n\t\t\tSystem.out.println(\" DDY(GIA) NADIAD\");\r\n\t\t}\r\n\t\tif(n<=615){\r\n\t\t\tSystem.out.println(\" DDU(SFI) NADIAD\");\r\n\t\t}\r\n\t\tif(n<=4082){\r\n\t\t\tSystem.out.println(\" DPIATR Changa\");\r\n\t\t}\r\n\t\tif(n<=2280){\r\n\t\t\tSystem.out.println(\" VV Nagar\");\r\n\t\t}\r\n\t\tif(n<=1293){\r\n\t\t\tSystem.out.println(\" VGEC Ahmedabad\");\r\n\t\t}\r\n\t\tif(n<=3042){\r\n\t\t\tSystem.out.println(\" CSPIT Changa\");\r\n\t\t}\r\n\t\tif(n<=14472){\r\n\t\t\tSystem.out.println(\" Darshan University Rajkot\");\r\n\t\t}\r\n\t\tif(n<=812){\r\n\t\t\tSystem.out.println(\" BVM(GIA) VVnagar\");\r\n\t\t}\r\n\r\n\t\tif(n<=19476){\r\n\t\t\tSystem.out.println(\" Aditya Birla Ahmedabad\");\r\n\t\t}\r\n\t\tif(n<=4763){\r\n\t\t\tSystem.out.println(\" GEC Bhavnagar\");\r\n\t\t}\r\n\t\tif(n<=5841){\r\n\t\t\tSystem.out.println(\" GEC Rajkot\");\r\n\t\t}\r\n\t\tif(n<=10101){\r\n\t\t\tSystem.out.println(\" GEC Patan\");\r\n\t\t}\r\n\t\tif(n<=12197){\r\n\t\t\tSystem.out.println(\" Indus University Abad\");\r\n\t\t}\r\n                if(n<=70000){\r\n                    System.out.println(\" Alpha Kalol\");\r\n                    System.out.println(\" Appolo Aabad\");\r\n                    System.out.println(\" Atmiya Rajkot\");\r\n                    System.out.println(\" Ganpat University\");\r\n                    System.out.println(\" Gyanmanjri Bhavnagar\");\r\n                }\r\n\t\telse{\r\n\t\t\tSystem.out.println(\"Can not fetch output , Enter valid input.\");\r\n\t\t}\r\n\t\t\r\n\r\n\t}\r\n\r\n}\r\n\r\n";
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
              console.log("Credits left = "+creditsLeft);
            })
            .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))

          }

          //EE
          else if(selectedbranch=="EE")
          {
            branch_dis.innerText="EE";
            console.log("EE Selected");
            
            output.innerHTML = "Loading...";
            
            console.log(stdin.value);
            
            var obj4 = {};
            obj4["clientId"] = "5432d7273018e7a31838ca0d0dfa4db";
            obj4["clientSecret"] = "95e0e10b83ee23d1985f8c69a271cac82c635dab8815bf837e8f27de05272757";
            obj4["script"] = "\r\nimport java.util.Scanner;\r\n\r\npublic class Main {\r\n    public static void main(String[] args) {\r\n        int n;\r\n\t\tScanner sc = new Scanner(System.in);\r\n\t\tn = sc.nextInt();\r\n\t\t// System.out.println(\"the branch you have selected is EE :\");\r\n\t\tif(n<=5915){\r\n\t\t\tSystem.out.println(\"Nirma\");\r\n\t\t}\r\n\t\tif(n<=3609){\r\n\t\t\tSystem.out.println(\"MSU Baroda\");\r\n\t\t}\r\n\t\tif(n<=21236){\r\n\t\t\tSystem.out.println(\"PDPU Raisan\");\r\n\t\t}\r\n\t\tif(n<=5007){\r\n\t\t\tSystem.out.println(\"LDLC Ahmedabad\");\r\n\t\t}\r\n\t\tif(n<=9580){\r\n\t\t\tSystem.out.println(\" VGEC Ahmedabad\");\r\n\t\t}\r\n\t\tif(n<=7608){\r\n\t\t\tSystem.out.println(\"BVM(GIA) VVNagar\");\r\n\t\t}\r\n\t\tif(n<=21570){\r\n\t\t\tSystem.out.println(\"GEC Rajkot\");\r\n\t\t}\r\n\t\tif(n<=11456){\r\n\t\t\tSystem.out.println(\"GEC,surat\");\r\n\t\t}\r\n\t\tif(n<=18515){\r\n\t\t\tSystem.out.println(\" GEC Valsad\");\r\n\t\t}\r\n                if(n<=21570){\r\n                        System.out.println(\" GEC Patan\");\r\n                }\r\n                if(n<=16823){\r\n                    System.out.println(\" IITRAM Abad\");\r\n                }\r\n                if(n<=70000){\r\n                    System.out.println(\"GCET vvnagar\");\r\n                System.out.println(\"ADITYA birla abad\");\r\n                System.out.println(\"ALPHA kalol\");\r\n                System.out.println(\"GANPAT university ICT mehsana\");\r\n                System.out.println(\"GEC bharuch\");\r\n                System.out.println(\"GEC bhuj\");\r\n                System.out.println(\"GEC palanpur\");\r\n                System.out.println(\"CSPIT changa\");\r\n                System.out.println(\"Darshan university rajkot\");\r\n                System.out.println(\"Atmiya rajkot\");\r\n                System.out.println(\"Adani ahmedabad\");\r\n\t\tSystem.out.println(\"Indus university abad\");\r\n              \r\n                }\r\n\t\telse{\r\n\t\t\tSystem.out.println(\"Can not fetch output , Enter valid input.\");\r\n\t\t}\r\n\t\t\r\n                \r\n    }\r\n    \r\n}\r\n";
            obj4["language"] = "java";
            obj4["versionIndex"] = "0";
            obj4["stdin"] = stdin.value;
            var jsonStr = JSON.stringify(obj4);
            
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
              console.log("Credits left = "+creditsLeft);
              // credits.innerHTML = "Runs left: " + creditsLeft;
            })
            .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))

          }

          //Chemical
          else if(selectedbranch=="Chemical")
          {
            branch_dis.innerText="Chemical";
            console.log("Chemical");
            output.innerHTML = "Loading...";
            
            console.log(stdin.value);
            
            var obj5 = {};
            obj5["clientId"] = "5432d7273018e7a31838ca0d0dfa4db";
            obj5["clientSecret"] = "95e0e10b83ee23d1985f8c69a271cac82c635dab8815bf837e8f27de05272757";
            obj5["script"] = "import java.util.Scanner;\r\n\r\npublic class Main {\r\n    public static void main(String[] args) {\r\n        int n;\r\n\t\tScanner sc = new Scanner(System.in);\r\n\t\tn = sc.nextInt();\r\n\t\t// System.out.println(\"the branch you have selected is Chemical E. :\");\r\n\t\tif(n<=3029){\r\n\t\t\tSystem.out.println(\" Nirma\");\r\n\t\t}\r\n\t\tif(n<=866){\r\n\t\t\tSystem.out.println(\" MSU baroda\");\r\n\t\t}\r\n\t\tif(n<=7187){\r\n\t\t\tSystem.out.println(\" PDPU raisan\");\r\n\t\t}\r\n\t\tif(n<=2956){\r\n\t\t\tSystem.out.println(\" LDCE Ahmedabad\");\r\n\t\t}\r\n        if(n<=2275){\r\n            System.out.println(\" DDU(GIA) Nadiad\");\r\n            }\r\n        if(n<=5859){\r\n            System.out.println(\" DDU(SFI) Nadiad\");\r\n            }\r\n        if(n<=23235){\r\n            System.out.println(\" GCET VVnagar\");\r\n            }\r\n\t\tif(n<=5381){\r\n\t\t\tSystem.out.println(\" VGEC Ahmedabad\");\r\n\t\t}\r\n\t\tif(n<=7366){\r\n\t\t\tSystem.out.println(\" GEC Bharuch\");\r\n\t\t}\r\n\t\tif(n<=20707){\r\n\t\t\tSystem.out.println(\" GEC Bhuj\");\r\n\t\t}\r\n\t\tif(n<=13896){\r\n\t\t\tSystem.out.println(\" GEC Valsad\");\r\n\t\t}\r\n                if(n<=70000){\r\n                     System.out.println(\"Adiya Birla Abad\");\r\n                }\r\n\t\telse{\r\n\t\t\tSystem.out.println(\"Can not fetch output , Enter valid input.\");\r\n\t\t}\r\n\t\t\r\n             \r\n\r\n    }\r\n    \r\n}\r\n";
            obj5["language"] = "java";
            obj5["versionIndex"] = "0";
            obj5["stdin"] = stdin.value;
            var jsonStr = JSON.stringify(obj5);
            
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
              console.log("Credits left = "+creditsLeft);
            })
            .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))

          }


          //ECE
          else if(selectedbranch=="ECE")
          {
            branch_dis.innerText="ECE";
            console.log("ECE");
            output.innerHTML = "Loading...";
            
            console.log(stdin.value);
            
            var obj6 = {};
            obj6["clientId"] = "5432d7273018e7a31838ca0d0dfa4db";
            obj6["clientSecret"] = "95e0e10b83ee23d1985f8c69a271cac82c635dab8815bf837e8f27de05272757";
            obj6["script"] = "\r\nimport java.util.Scanner;\r\n\r\npublic class Main {\r\n\r\n    public static void main(String[] args) {\r\n        int n;\r\n\t\tScanner sc = new Scanner(System.in);\r\n\t\tn = sc.nextInt();\r\n\t\t// System.out.println(\"the branch you have selected is ECE :\");\r\n\t\tif(n<=2099){\r\n\t\t\tSystem.out.println(\"Nirma\");\r\n\t\t}\r\n\t\tif(n<=5456){\r\n\t\t\tSystem.out.println(\"PDPU raisan\");\r\n\t\t}\r\n\t\tif(n<=3759){\r\n\t\t\tSystem.out.println(\"LDLC ahmedabad\");\r\n\t\t}\r\n        if(n<=3509){\r\n            System.out.println(\"DDU(GIA) nadiad\");\r\n            }\r\n        if(n<=7886){\r\n                System.out.println(\"DDU(SFI) nadiad\");\r\n            }\r\n\t\tif(n<=7495){\r\n\t\t\tSystem.out.println(\" vgec,ahmedabad\");\r\n\t\t}\r\n\t\tif(n<=18435){\r\n\t\t\tSystem.out.println(\" BVM(SFI) vvnagar\");\r\n\t\t}\r\n\t\tif(n<=13739){\r\n\t\t\tSystem.out.println(\" GEC,surat\");\r\n\t\t}\r\n                if(n<=70000){\r\n            \tSystem.out.println(\"GCET ,vvnagar\");\r\n               System.out.println(\"GEC bharuch\");\r\n               System.out.println(\"GEC patan\");\r\n               System.out.println(\"GEC bhavnagar\");\r\n               System.out.println(\"GEC rajkot\");\r\n               System.out.println(\"Alpha kalol\");\r\n               System.out.println(\"Atmiya rajkot\");\r\n               System.out.println(\"Darshan university rajkot\");\r\n               System.out.println(\"CSPIT changa\");\r\n               System.out.println(\"Indus university abad\");\r\n                }\r\n\t\telse{\r\n\t\t\tSystem.out.println(\"Can not fetch output , Enter valid input.\");\r\n\t\t}\r\n\t\t\r\n             \r\n    }\r\n    \r\n}\r\n";
            obj6["language"] = "java";
            obj6["versionIndex"] = "0";
            obj6["stdin"] = stdin.value;
            var jsonStr = JSON.stringify(obj6);
            
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
              console.log("Credits left = "+creditsLeft);
            })
            .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))

          }

          //E
          else if(selectedbranch=="ECE")
          {
            branch_dis.innerText="ECE";
            console.log("ECE");
            output.innerHTML = "Loading...";
            
            console.log(stdin.value);
            
            var obj7 = {};
            obj7["clientId"] = "5432d7273018e7a31838ca0d0dfa4db";
            obj7["clientSecret"] = "95e0e10b83ee23d1985f8c69a271cac82c635dab8815bf837e8f27de05272757";
            obj7["script"] = "\r\nimport java.util.Scanner;\r\n\r\npublic class Main {\r\n\r\n    public static void main(String[] args) {\r\n        int n;\r\n\t\tScanner sc = new Scanner(System.in);\r\n\t\tn = sc.nextInt();\r\n\t\t// System.out.println(\"the branch you have selected is ECE :\");\r\n\t\tif(n<=2099){\r\n\t\t\tSystem.out.println(\"Nirma\");\r\n\t\t}\r\n\t\tif(n<=5456){\r\n\t\t\tSystem.out.println(\"PDPU raisan\");\r\n\t\t}\r\n\t\tif(n<=3759){\r\n\t\t\tSystem.out.println(\"LDLC ahmedabad\");\r\n\t\t}\r\n        if(n<=3509){\r\n            System.out.println(\"DDU(GIA) nadiad\");\r\n            }\r\n        if(n<=7886){\r\n                System.out.println(\"DDU(SFI) nadiad\");\r\n            }\r\n\t\tif(n<=7495){\r\n\t\t\tSystem.out.println(\" vgec,ahmedabad\");\r\n\t\t}\r\n\t\tif(n<=18435){\r\n\t\t\tSystem.out.println(\" BVM(SFI) vvnagar\");\r\n\t\t}\r\n\t\tif(n<=13739){\r\n\t\t\tSystem.out.println(\" GEC,surat\");\r\n\t\t}\r\n                if(n<=70000){\r\n            \tSystem.out.println(\"GCET ,vvnagar\");\r\n               System.out.println(\"GEC bharuch\");\r\n               System.out.println(\"GEC patan\");\r\n               System.out.println(\"GEC bhavnagar\");\r\n               System.out.println(\"GEC rajkot\");\r\n               System.out.println(\"Alpha kalol\");\r\n               System.out.println(\"Atmiya rajkot\");\r\n               System.out.println(\"Darshan university rajkot\");\r\n               System.out.println(\"CSPIT changa\");\r\n               System.out.println(\"Indus university abad\");\r\n                }\r\n\t\telse{\r\n\t\t\tSystem.out.println(\"Can not fetch output , Enter valid input.\");\r\n\t\t}\r\n\t\t\r\n             \r\n    }\r\n    \r\n}\r\n";
            obj7["language"] = "java";
            obj7["versionIndex"] = "0";
            obj7["stdin"] = stdin.value;
            var jsonStr = JSON.stringify(obj7);
            
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
              console.log("Credits left = "+creditsLeft);
            })
            .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))

          }
          else 
          {
            console.log("Error : null (nothing inserted)");
          }
            
});
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
  
  
  
