function compute()
{
    var principal = document.getElementById("principal").value;
    if (principal<=0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
    else
    {
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("interest").innerText=interest ;
    document.getElementById("result").innerHTML="If you deposit \<b\>"+ principal+"\</b\>, at an interest rate of \<b\>"+rate+"%\</b\>, You will receive an amount of \<b\>"+interest+"\</b\> in the year \<b\>"+year+"\<b\>" ;
    }
};

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
};