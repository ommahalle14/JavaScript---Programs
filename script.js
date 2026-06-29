{
    // sum of number of its digits
    let sum =0;
    let i = 0;
    let n = 153;
    let a = n;
    while(a>0){
        let digit = a%10;
        sum +=digit;
        a = Math.floor(a/10);
    }
    console.log("Ex - Number :",n);
    console.log("Sum of its digits",sum);

    //sum of number of digits ends here
}





{
    //prime no. check 
    let n = 153;
    let isPrime = true;
    if(n <=1){
        isPrime = false;
    }else{
        for(i = 2; i <n ;i++ ){
                if(n % i === 0){
                isPrime  = false;
                break;
            }
        }
    }
    if(isPrime){
        console.log("is it prime number? yes");
    }else{
        console.log("is it prime number? no");
    }
    //prime no. check ends here 
}




{
    //Armstrongnumber 
    let n = 153;
    let a = n;
    let digits = n.toString().length;
    let sum = 0;
    while (n>0){
        let digit = n%10;
        sum += digit ** digits;
        n = Math.floor(n/10);
    }
    if (sum === a) {
        console.log("is it an amstrong number? Yes");
    } else {
        console.log("is it an amstrong number? No");
    }
    //armstrong end here
}

{
    //sum of first n natural numbers
    let n = 0;
    for(let i = 0; i<=10 ; i++){
        n += i;
    }
    console.log("the sum of first n numbers are",n);
}

{
    //factors
    let n = 12;
    console.log("Factors of", n, "are:");
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            console.log(i);
        }
    }
}


{
    //table of 2
    let n = 2;
    for(let i = 1 ; i<=10 ; i++){
        console.log(n ,"X", i ,"=",(n*i));
    }
    //table of 2 ends here
}
