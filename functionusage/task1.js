function handleNum(pairedCb,unpairedCb,number){
    if (number % 2 === 0) {
        pairedCb(); 
     }
    
    else {
        unpairedCb(); 
           } 
}


function handleEven(){
    console.log('number is even')
}
function handleOdd(){
    console.log('number is odd')
 }

handleNum(handleEven,handleOdd,20)






