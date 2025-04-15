function handleNum(num){
    console.log(num);
    if (num > 0){
        handleNum(num - 1);
    }
}
handleNum(5);
