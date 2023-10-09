function sumarTodo(){
    let sum = 0;
    for(let i = 0; i < arguments.length;i++){
        sum += arguments[i];
        
    }
    return sum;
}
x = sumarTodo(11,22,33,44,55);
    console.log(x);