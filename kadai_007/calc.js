let num = 54234825;

//３と５の倍数であるならば
if ((num % 3) == 0 && (num % 5) == 0){
    console.log('３と５の倍数です');
}

//３の倍数であるならば
else if ((num % 3) == 0){
    console.log('３の倍数です');
}

//５の倍数であるならば
else if ((num % 5) == 0){
    console.log('５の倍数です');
}

else {
    console.log(num);
}