 function evaluateNumber() 
 { 
     let getElement = document.getElementById("output").value 
     let contentElement = eval(getElement)
     document.getElementById("output").value = contentElement
 } 

 function displayContent(contentValue) 
 { 
     document.getElementById("output").value+=contentValue
 } 

 function displayOperator(contentValue) 
 { 
     document.getElementById("output").value+=contentValue
 } 
