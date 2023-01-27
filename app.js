let oneEuroIs = {
    "JPY": 127.9, 
    "USD": 1.2, 
    "GBP": 0.8 
}
const fromEuroToDollar = function(valueInEuro){
    
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    return valueInDollar;
}


const fromDollarToYen = function(valueInDollar){
    let valueInYen = ((1/oneEuroIs.USD)*oneEuroIs.JPY)*valueInDollar
    return valueInYen
}
const fromYenToPound = function(valueInYen){
    let valueInPound = ((1/oneEuroIs.JPY)*oneEuroIs.GBP)*valueInYen
    return valueInPound
}
module.exports={fromEuroToDollar,fromDollarToYen,fromYenToPound};