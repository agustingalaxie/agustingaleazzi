const historyDiv = document.querySelector(".history-toggle");
const calculatorDiv = document.querySelector(".calculator-toggle");
const buttonCalc = document.querySelector(".button-calc");
const buttonHist = document.querySelector(".button-hist");
const intro = document.querySelector(".intro");
const greet = document.querySelector(".greet");
const formhist = document.formhist;
const formcalc = document.formcalc;
const displayHist = document.querySelector(".displayhist");
const displayCalc = document.querySelector(".displaycalc");
const historyList = document.querySelector(".historylist");
const containerResponse = document.querySelector(".response");
const displayResponse = document.querySelector(".displayresponse");
const KEY = "4bad89eedb909cfd375abdbdb90e6d4f";

historyDiv.onclick = () => {
    const history = document.querySelector(".history");
    const calculator = document.querySelector(".calculator");
    intro.classList.add("hidden");
    greet.classList.add("hidden");
    calculatorDiv.classList.add("opacity");
    historyDiv.classList.remove("opacity");
    history.className = "col 12 history";
    calculator.className = "col 12 calculator hidden";
    displayResponse.className = ""
}

calculatorDiv.onclick = () => {
    const history = document.querySelector(".history");
    const calculator = document.querySelector(".calculator");
    intro.classList.add("hidden");
    greet.classList.add("hidden");
    historyDiv.classList.add("opacity");
    calculatorDiv.classList.remove("opacity");
    history.className = "col 12 history hidden";
    calculator.className = "col 12 calculator";
}

buttonCalc.onclick = () => {
    const quantity = formcalc.quantity.value;
    const ratesFromValue = formcalc.ratesFrom.value;
    const ratesToValue = formcalc.ratesTo.value;
    if(quantity===""){
        displayCalc.textContent = "Please insert a value";
        return
    } else {
        displayCalc.textContent = "";
        const url = "http://api.exchangeratesapi.io/v1/latest?access_key=" + KEY /*+ "&base=" + ratesFromValue*/;
        fetch(url)
        .then(response => response.json())
        .then(
            responseJSON => {
            console.log(responseJSON);
            let currencyFrom = responseJSON.rates[ratesFromValue];
            const currencyTo = responseJSON.rates[ratesToValue];
            const count = (quantity / currencyFrom) * currencyTo;
            const countcleared = parseFloat(count).toFixed(2);
            displayCalc.innerText = `${quantity} ${ratesFromValue} equals to ${countcleared} ${ratesToValue}`
            })
        .catch(error => console.error("falló", error))
    }
}

buttonHist.onclick = () => {
    const dateToCheck = formhist.dateToCheck.value; 
    const baseCurrency = formhist.base.value;
    if(dateToCheck === ""){
        displayHist.textContent = "Please select a date";
        return
    } else {
        displayHist.textContent = "";
        console.log(dateToCheck)
        const dateUrl = "http://api.exchangeratesapi.io/v1/" + dateToCheck + "?access_key=" + KEY /* + "?base=" + baseCurrency*/;
        fetch(dateUrl)
        .then(response => response.json())
        .then(responseJSON => {
            console.log(responseJSON);
            const base = responseJSON.rates[baseCurrency]
            Object.keys(responseJSON.rates).forEach(moneda => {
                const li = document.createElement("li");
                const value = (1 / base) * responseJSON.rates[moneda];                
                li.innerText = `${moneda}: ${parseFloat(value).toFixed(2)}`
                historyList.appendChild(li)
            }),
            displayResponse.textContent = `The currency rates for the date ${dateToCheck} are: `
            //const buttonReset
            })
        .catch(error => console.error("falló", error))
    }
    formhist.classList.add("hidden")
    containerResponse.classList.remove("hidden");
}