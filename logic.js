
function addTodisplay(input){
    let inp = document.getElementById("inp");
    inp.value += input;

}

function clearr(){
    let inp = document.getElementById("inp");
    inp.value="";
    
}

function calculate(){
    let inp = document.getElementById("inp");
    try{
        let expression =inp.value;
        inp.value = eval(inp.value);
    }
    catch(error){
        alert("Error");
    }

}