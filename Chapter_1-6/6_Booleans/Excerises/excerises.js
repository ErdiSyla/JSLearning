const hour = 1;
const myName = 'Erdi Syla';

if(hour >= 6 && hour <= 12){
    console.log(`Good morning ${myName}!`);
}else if(hour >= 13 && hour <=17){
    console.log(`Good afternon ${myName}!`);
}else {
    console.log(`Good night ${myName}!`)
}

const age = 3;
const isHoliday = true;

if((age <= 6 || age >= 65) && !isHoliday){
    console.log('Discount');
}else {
    console.log('No Discount');
}