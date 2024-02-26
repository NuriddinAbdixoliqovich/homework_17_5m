function myFunction() {
    let x = document.getElementById("firstnumber");
    let y = document.getElementById("secondnumber");
    let plus = document.getElementById("plus").checked;
    let minus = document.getElementById("minus").checked;
    let multiple = document.getElementById("multiple").checked;
    let divide = document.getElementById("divide").checked;
    let button = document.getElementById("button")
    let result = document.getElementById("result")
    
    
        if (plus){
            result.value = (Number(x.value)+Number(y.value));
        } 
        if (minus){
            result.value = (Number(x.value)-Number(y.value));
        } 
        if (multiple){
            result.value = (Number(x.value)*Number(y.value));
        }
        if (divide) {
            result.value = (Number(x.value)/Number(y.value));
        }

        console.log(result.value);
        document.getElementById("result").innerText = result.value;
        
        
    }
    
    
