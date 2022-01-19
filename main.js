function sum(){
    let cash1 = parseFloat(document.getElementById("cash-1").value);
    let cash2 =parseFloat(document.getElementById("cash-2").value);
    let cash3 = parseFloat(document.getElementById("cash-3").value);

    let check1 = parseFloat(document.getElementById("ch-1").value);
    let check2 = parseFloat(document.getElementById("ch-2").value);
    let check3 = parseFloat(document.getElementById("ch-3").value);

    let save1 = parseFloat(document.getElementById("save-1").value);
    let save2 = parseFloat(document.getElementById("save-2").value);
    let save3 = parseFloat(document.getElementById("save-3").value); 
    
 let total1 =  cash1 + check1 + save1;  
document.getElementById("total-1").innerHTML = "$ "+total1;

let total2 = cash2 + check2 + save2;
document.getElementById("total-2").innerHTML ="$ "+total2;

let total3 = cash3 + check3 + save3;
document.getElementById("total-3").innerHTML = "$ "+total3;




let loan1 = parseFloat(document.getElementById("loan-1").value);
let loan2 =parseFloat(document.getElementById("loan-2").value);
let loan3 = parseFloat(document.getElementById("loan-3").value);

let exp1 = parseFloat(document.getElementById("exp-1").value);
let exp2 = parseFloat(document.getElementById("exp-2").value);
let exp3 = parseFloat(document.getElementById("exp-3").value);

let cre1 = parseFloat(document.getElementById("cre-1").value);
let cre2 = parseFloat(document.getElementById("cre-2").value);
let cre3 = parseFloat(document.getElementById("cre-3").value); 

let t1 =  loan1 + exp1 + cre1;  
document.getElementById("t-1").innerHTML = "$ "+t1;

let t2 = loan2 + exp2 + cre2;
document.getElementById("t-2").innerHTML ="$ "+t2;

let t3 = loan3 + exp3 + cre3;
document.getElementById("t-3").innerHTML = "$ "+t3;




let final1 =  total1 - t1;  
document.getElementById("final-1").innerHTML = "$ "+final1;

let final2 = total2 - t2 ;
document.getElementById("final-2").innerHTML ="$ "+final2;

let final3 = total3 - t3;
document.getElementById("final-3").innerHTML = "$ "+final3;


}

$(document).on('click','#b',function(){
    let pdf = new jsPDF();
    let section=$('body');
    let page= function() {
        pdf.save('balance_sheet.pdf');
       
    };
    pdf.addHTML(section,page);
    })
