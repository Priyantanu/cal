let resultNode = document.getElementById("outputbox");
let previousVal = 0;
let previousMethod = 'add';
let isstringinput = true;
placedValue = (inputChar) =>{
    if(inputChar==`C`){
        resultNode.value = 0;
        previousVal = 0;
        previousMethod = "add";
        isstringinput  = true;
        return;
    }
    if(isstringinput==true && inputChar!=`+` && inputChar!= `-` && inputChar!= `*` && inputChar!= `-` && inputChar!="=" ){ resultNode.value = inputChar; isstringinput = false;return; }
    switch(inputChar){
        case `1`:
            resultNode.value += inputChar;
            break;
        case `2`:
            resultNode.value += inputChar;
             break;
        case `3`:
            resultNode.value += inputChar;
             break;
        case `4`:
            resultNode.value += inputChar;
            break;
        case `5`:
            resultNode.value += inputChar;
            break;
        case `6`:
            resultNode.value += inputChar;
                break;
        case `7`:
            resultNode.value += inputChar;
                break;
        case `8`:
            resultNode.value += inputChar;
            break;
        case `9`:
            resultNode.value += inputChar;
            break;
        case `00`:
            resultNode.value += inputChar;
                break;
        case `0`:
            resultNode.value += inputChar;
                break;
        case `.`:
            resultNode.value += inputChar;
            break;
        case `%`:
            isstringinput = true;
                break;
        case `E`:
            resultNode.value = resultNode.value.slice(0,-1);
            break;
        case `+`:
            placedValue("=");
            isstringinput = true;
            previousMethod = "add";
            previousVal = resultNode.value;
            break;
        case `-`:
            placedValue("=");
            isstringinput = true;
            previousMethod = "sub";
            previousVal = resultNode.value;
                break;
        case `*`:
            placedValue("=");
            isstringinput = true;
            previousMethod = "mul";
            previousVal = resultNode.value;
                break;
        case `/`:
            placedValue("=");
            isstringinput = true;
            previousMethod = "div";
            previousVal = resultNode.value;
            break;
        case `=`:
            isstringinput = true;
            previousvalFloat = parseFloat(previousVal);
            resultFloat = parseFloat(resultNode.value);
            switch(previousMethod){
                case "add":
                    resultNode.value = previousvalFloat + resultFloat;
                    break;
                case "subs":
                    resultNode.value = previousvalFloat - resultFloat;
                    break;
                case "mul":
                    resultNode.value = previousvalFloat * resultFloat;
                    break;
                case "div":
                    resultNode.value = previousvalFloat/resultFloat;
                    break;
                case "mod":
                    resultNode.value = previousvalFloat%resultFloat;
                    break;
            }
            previousMethod = "add";
            previousVal = 0;
    }
};


