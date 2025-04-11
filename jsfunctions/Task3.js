function checkOrder(available, ordered){
if (ordered === 0){
    console.log('Your order is empty');
} else if (available < ordered){
    console.log('“Your order is too large, we don’t have enough goods.');
} else if (available >= ordered){
    console.log('Your order is accepted');
}
}
checkOrder(20,0)