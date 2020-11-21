//changes placeholder to indicate the time input should be in months
    btnCarLoan.onclick=function(){
      inptTime.placeholder = "Enter the number of months"
    }

//changes placeholder to indicate the time should either be 15 or 30 years
    btnHomeLoan.onclick = function(){
      inptTime.placeholder  = "Enter 15 or 30 years"
    }

  //function to calculate car payment
    function carLoanPayment(principle,months,rate){
      rate = parseFloat(rate/1200)
      principle = parseFloat(principle)
      months = parseFloat(months)
      payment = principle * (rate*((1+rate)**months))/((1+rate)**months-1)
      payment = Math.round(payment)
      return payment
      }
  
//function to calculate home loan payment 
    function homeLoanPayment (principle, years,rate){
      rate = parseFloat(rate/1200)
      principle = parseFloat(principle)
      months = parseFloat(years*12)
      payment = principle * (rate*((1+rate)**months))/((1+rate)**months-1)
      payment = payment.toFixed(2)
      return payment
      }
  
  //button to calculate payment and give the output
    btnCalc.onclick = function(){
      if (inptTime.placeholder == "Enter the number of months"){
        lblOutput.value = `A car loan for $${inptAmount.value} over ${inptTime.value} months at ${inptIntRate.value}% interest would have a monthly payment of 
        ${carLoanPayment(inptAmount.value,inptTime.value,inptIntRate.value)}`
        }
    else if (inptTime.placeholder == "Enter 15 or 30 years"){
        lblOutput.value = `A home loan for $${inptAmount.value} over ${inptTime.value} years at ${inptIntRate.value}% interest would have a monthly payment of 
        ${homeLoanPayment(inptAmount.value,inptTime.value,inptIntRate.value)}`
        }
  }
    //function for stop button
    btnStop.onclick = function(){
    ChangeForm(Stopped)
  }