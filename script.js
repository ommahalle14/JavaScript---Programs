const arr = [1,2,3,4,5,3,9,4,5];
function maxno(){
    let max = 0;
    for(let i = 0 ; i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max;
}

const maximumno = maxno();
console.log(" Maximum number :",maximumno);



let sumofele = function(){
    let sum = 0;
    for(let i = 0 ; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
console.log("sum of all elements :",sumofele());


let noofoddnumber = ()=>{
    let count = 0 ;
    for(let i = 0; i < arr.length; i++){
        if(arr[i]%2 != 0){
            count++
        }
    }
    return count;
}
console.log("count of odd numbers :",noofoddnumber());