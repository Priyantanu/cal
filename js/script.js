let resultNode = document.getElementById("outputbox");
let previousVal = 0;
let previousMethod = 'add';
let isstringinput = true;
let sign = document.querySelector("#header .alignRight");
placedValue = (inputChar) =>{
    if(inputChar==`C`){
        reset();
        isstringinput  = true;
        return;
    }
    if(isstringinput==true && inputChar!=`+` && inputChar!= `-` && inputChar!= `*` && inputChar!= `-` && inputChar!="=" && inputChar!='E'){ resultNode.value = inputChar; isstringinput = false;return; }
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
            if(resultNode.value.length==1){
                isstringinput = true;
                reset();
                return;
            }
            resultNode.value = resultNode.value.slice(0,-1);
            break;
        case `+`:
            placedValue("=");
            isstringinput = true;
            previousMethod = "add";
            previousVal = resultNode.value;
            if(sign.textContent.length>5) sign.textContent = sign.textContent.slice(0,-1);
            sign.textContent += `+`;
            break;
        case `-`:
            placedValue("=");
            isstringinput = true;
            previousMethod = "sub";
            previousVal = resultNode.value;
            if(sign.textContent.length>5) sign.textContent = sign.textContent.slice(0,-1);
            sign.textContent += `-`
                break;
        case `*`:
            placedValue("=");
            isstringinput = true;
            previousMethod = "mul";
            previousVal = resultNode.value;
            if(sign.textContent.length>5) sign.textContent = sign.textContent.slice(0,-1);
            sign.textContent += `*`
                break;
        case `/`:
            placedValue("=");
            isstringinput = true;
            previousMethod = "div";
            previousVal = resultNode.value;
            if(sign.textContent.length>5) sign.textContent = sign.textContent.slice(0,-1);
            sign.textContent += `/`
            break;
        case `=`:
            isstringinput = true;
            previousvalFloat = parseFloat(previousVal);
            resultFloat = parseFloat(resultNode.value);
            switch(previousMethod){
                case "add":
                    resultNode.value = previousvalFloat + resultFloat;
                    break;
                case "sub":
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
            sign.textContent = `SIGN:`
            break;
    }
};


reset  = () => {
    resultNode.value = 0;
    previousVal = 0;
    previousMethod = "add";
    sign.textContent = `SIGN:`
}

