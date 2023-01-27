const {fromEuroToDollar,fromDollarToYen,fromYenToPound} = require('./app.js');


test("1€ debería ser equivalente a 1.2$", function(){

    const { fromEuroToDollar } = require('./app.js')
    expect(fromEuroToDollar(1)).toBe(1.2); 
})

test("1.2$ debería ser equivalente a 127.9¥", function(){ //Ambos equivalen a 1€
    
    const { fromDollarToYen } = require('./app.js')
    expect(fromDollarToYen(1.2)).toBe(127.9);
})
test("127.9¥ debería ser equivalente a 0.8£", function(){ //Ambos equivalen a 1€
    
    const { fromYenToPound } = require('./app.js')
    expect(fromYenToPound(127.9)).toBe(0.8); 
})