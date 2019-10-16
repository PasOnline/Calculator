function insert(num){
    document.form.textview.value = document.form.textview.value+num;
}

function equal(){
    var result = document.form.textview.value;
    
    if(result) {
        document.form.textview.value = eval(result); //do the math with eval
    } 
}

function clean(){
    document.form.textview.value = "";
}

function back(){
    var back = document.form.textview.value;
    document.form.textview.value = back.substring(0, back.length-1);
}