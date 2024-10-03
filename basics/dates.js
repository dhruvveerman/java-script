let mydate = new Date("02-26-2024");
// console.log(mydate.toString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleTimeString());
//console.log(mydate.getTime());

console.log(mydate.toLocaleString('default',{
    weekday:"long"
}));

 