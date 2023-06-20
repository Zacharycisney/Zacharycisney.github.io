//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"


function passNumber(event){
    event.preventDefault()

    let num = parseFloat(document.getElementById("amount").value)
    let protoVal = document.getElementById("protocal").value

    if(num > 0 && protoVal > 0 && protoVal <= 4){
        //  window.alert(carLoanFocus(num))
        // window.alert(protoVal)
        if(protoVal == 1){
            let newInfo = document.querySelector('div.calculations')
            let html = ''
             
            html += `<div class="col">
                    <h6>Stocks: $${num*.15}</h6>
                </div>
                <div class="col">
                    <h6>Tuition: $${num*.4}</h6>
                </div>
                <div class="col">
                    <h6>Home Savings: $${num*.2}</h6>
                </div>
                <div class="col">
                    <h6>Ski Fund: $${num*.1}</h6>
                </div>
                <div class="col">
                    <h6>Dog Fund: $${num*.15}</h6>
                </div>`
            newInfo.innerHTML = html
        }
    }
    else{
        window.alert('Please put in a value larger than 0 and select a protocal. Thank you.')
    }

}

// function carLoanFocus(n){
//     n = n*2
//     return n
// }

document.querySelector("form").onsubmit = passNumber //works

// document.querySelector("#input").onsubmit = test()

// function test(){
//     window.alert('Hell ya brother')
// }