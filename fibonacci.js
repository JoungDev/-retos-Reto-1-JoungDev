function fibonacci (number) {
    let a = 0 ,b =1,i=0;
    if(number == 0 || number == 1) {
        console.log(1);
    }else{
        while(i<number){ 
            let resultado = a + b;
            console.log(b);
            a = b;
            b = resultado;
            i++;
        }
    }
}

fibonacci(0);