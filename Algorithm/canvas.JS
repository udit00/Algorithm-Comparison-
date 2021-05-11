const canvas=document.querySelector('canvas');

canvas.width=1500;
canvas.height=window.innerHeight;

let context=canvas.getContext('2d');
let arr=[Math.floor(Math.random() * 401)];
for(let i=0; i<75; i++){
    if(i==0){
        arr.push(randomNumberGenerator());
        context.fillRect(3, (innerHeight)-arr[i], 20, arr[i]+200);
        continue;
    }
    arr.push(randomNumberGenerator());
    context.fillRect(i*25, (innerHeight)-arr[i], 23, arr[i]+100);
}

function randomNumberGenerator(){
    if(Math.floor(Math.random() * 601) < 10){
        return Math.floor(Math.random() * 601) + Math.floor(Math.random() * 10);
    }
    return (Math.floor(Math.random() * 601));
}
