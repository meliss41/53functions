var passed = 0;
var failed = 0;
var total = 0;

var assert = {
       equals: function(expectedResults, returnResults) {
         total = passed+failed;

var newElement = document.createElement('div');
         newElement.id = "myElement"+total;
         newElement.className = "test";
         document.getElementById("test").appendChild(newElement);

var myDiv = new RedOrGreen(newElement.id);

      if(expectedResults === returnResults){
          passed++
          myDiv.makeGreen();
          //*To show that the results are the same as expected by printing out to notice the difference!//*
          document.getElementById(newElement.id).innerHTML = '<strong>Expected:</strong>'+expectedResults + '<br></br>' +'<strong>Results:</strong>'+returnResults +'<br></br>'+'<strong><h3>Passed!!!<strong>'      
        }
    else {

         failed++;
         myDiv.makeRed();
         //*To show that the results arent the same as expected by printing out to notes to compare the difference!//
          document.getElementById(newElement.id).innerHTML = '<strong>Expected:</strong>'+returnResults + '<br></br>' +'<strong>Results:</strong>'+expectedResults + '<strong><em> <== Error </em>!</strong>'+'<br></br>'+'<strong><h4>Failed!!!</strong>'     

        }
        total = passed+failed;
        document.getElementById("container").innerHTML ='Passed:'+passed+ ' <strong>Failed</strong>:'+failed+ ' TotalTests: '+total;
      }
};

  var TestMyCode={
          run:function(testfunction,functiontoreturn){
            try{
              functiontoreturn(assert);  
            }
            catch(e){
              alert(e)
            }
          }
        };
